// জাতীয় স্মৃতিসৌধ (সাভার) আবহাওয়া মডিউলের শেয়ার্ড হেল্পার।
// এই ফাইলটি দুই জায়গায় ব্যবহৃত হয়:
//  1) Weather.astro-র frontmatter (সার্ভার/বিল্ড-টাইম SSR মার্কআপ তৈরির জন্য)
//  2) Weather.astro-র ক্লায়েন্ট <script> (রানটাইম রিফ্রেশের জন্য)
// তাই এখানে কোনো DOM/ব্রাউজার-নির্ভর টপ-লেভেল কোড নেই — শুধু বিশুদ্ধ ফাংশন।

// Open-Meteo বিনামূল্যের পূর্বাভাস API (কোনো চাবি লাগে না) — স্থানাঙ্ক সাভার/জাতীয় স্মৃতিসৌধ
export const WX_API_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=23.9112985' +
  '&longitude=90.2547753' +
  '&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m' +
  '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max' +
  '&timezone=Asia%2FDhaka&forecast_days=7&wind_speed_unit=kmh';

export const TIMEZONE='Asia/Dhaka', OFFSET=21600, TTL=600000, DEADLINE=4500;
export interface Forecast {timezone:string;utc_offset_seconds:number;current:{time:string;temperature_2m:number;apparent_temperature:number;relative_humidity_2m:number;weather_code:number;wind_speed_10m:number;precipitation:number};daily:{time:string[];weather_code:number[];temperature_2m_max:number[];temperature_2m_min:number[];precipitation_probability_max:(number|null)[];uv_index_max:(number|null)[]}}
export function validateWeather(data:unknown,now=Date.now()):Forecast {
 const d=data as Forecast,c=d?.current,x=d?.daily;const n=(v:unknown,lo:number,hi:number)=>typeof v==='number'&&Number.isFinite(v)&&v>=lo&&v<=hi;
 const today=new Date(now+OFFSET*1000).toISOString().slice(0,10);
 if(d?.timezone!==TIMEZONE||d.utc_offset_seconds!==OFFSET||!c||!x||typeof c.time!=='string'||!/^\d{4}-\d{2}-\d{2}T([01]\d|2[0-3]):[0-5]\d$/.test(c.time))throw Error('Incomplete forecast');
 const age=now-Date.parse(c.time+'+06:00');if(!Number.isFinite(age)||age>10800000||age< -900000||c.time.slice(0,10)!==today)throw Error('Stale forecast');
 for(const [key,lo,hi]of [['temperature_2m',-100,65],['apparent_temperature',-120,80],['relative_humidity_2m',0,100],['wind_speed_10m',0,500],['precipitation',0,1000]]as const)if(!n(c[key],lo,hi))throw Error('Invalid current number');
 const code=(v:unknown)=>typeof v==='number'&&Object.hasOwn(WM,v);if(!code(c.weather_code))throw Error('Invalid WMO');
 for(const key of ['time','weather_code','temperature_2m_max','temperature_2m_min','precipitation_probability_max','uv_index_max']as const)if(!Array.isArray(x[key])||x[key].length!==7)throw Error('Incomplete seven days');
 for(let i=0;i<7;i++){const day=new Date(Date.parse(today+'T00:00Z')+i*86400000).toISOString().slice(0,10);if(x.time[i]!==day||!code(x.weather_code[i]))throw Error('Invalid forecast date/code');if(!n(x.temperature_2m_max[i],-100,65)||!n(x.temperature_2m_min[i],-100,65)||x.temperature_2m_min[i]>x.temperature_2m_max[i])throw Error('Invalid temperature');if(x.precipitation_probability_max[i]!==null&&!n(x.precipitation_probability_max[i],0,100))throw Error('Invalid probability');if(x.uv_index_max[i]!==null&&!n(x.uv_index_max[i],0,30))throw Error('Invalid UV');}
 return d;
}

export async function fetchWeather():Promise<Forecast>{const controller=new AbortController();let timer:ReturnType<typeof setTimeout>|undefined;try{return await Promise.race([(async()=>{const response=await fetch(WX_API_URL,{signal:controller.signal});if(!response.ok)throw Error("ProviderHTTP");const d=validateWeather(await response.json());if(controller.signal.aborted)throw Error("Deadline");return d;})(),new Promise<Forecast>((_,reject)=>timer=setTimeout(()=>{controller.abort();reject(Error("Deadline"));},DEADLINE))]);}finally{clearTimeout(timer);}}

export interface WmEntry {
  icon: string;
  label: string;
}

export const WM: Record<number, WmEntry> = {
  0: { icon: '☀️', label: 'পরিষ্কার আকাশ' },
  1: { icon: '🌤️', label: 'প্রধানত পরিষ্কার' },
  2: { icon: '⛅', label: 'আংশিক মেঘ' },
  3: { icon: '☁️', label: 'মেঘলা' },
  45: { icon: '🌫️', label: 'কুয়াশা' },
  48: { icon: '🌫️', label: 'কুয়াশা (তুষারসহ)' },
  51: { icon: '🌦️', label: 'হালকা গুঁড়ি গুঁড়ি' },
  53: { icon: '🌦️', label: 'গুঁড়ি গুঁড়ি বৃষ্টি' },
  55: { icon: '🌦️', label: 'ঘন গুঁড়ি গুঁড়ি' },
  56: { icon: '🌧️', label: 'হালকা বরফ-গুঁড়ি' },
  57: { icon: '🌧️', label: 'বরফ-গুঁড়ি' },
  61: { icon: '🌧️', label: 'হালকা বৃষ্টি' },
  63: { icon: '🌧️', label: 'মাঝারি বৃষ্টি' },
  65: { icon: '🌧️', label: 'ভারী বৃষ্টি' },
  66: { icon: '🌧️', label: 'হালকা বরফ-বৃষ্টি' },
  67: { icon: '🌧️', label: 'বরফ-বৃষ্টি' },
  71: { icon: '🌨️', label: 'হালকা তুষার' },
  73: { icon: '🌨️', label: 'মাঝারি তুষার' },
  75: { icon: '🌨️', label: 'ভারী তুষার' },
  77: { icon: '🌨️', label: 'তুষার-কণা' },
  80: { icon: '🌦️', label: 'হালকা বৃষ্টির ঝাঁক' },
  81: { icon: '🌧️', label: 'বৃষ্টির ঝাঁক' },
  82: { icon: '🌧️', label: 'তীব্র বৃষ্টির ঝাঁক' },
  85: { icon: '🌨️', label: 'হালকা তুষার-ঝাঁক' },
  86: { icon: '🌨️', label: 'তুষার-ঝাঁক' },
  95: { icon: '⛈️', label: 'বজ্রসহ বৃষ্টি' },
  96: { icon: '⛈️', label: 'বজ্র ও শিলাবৃষ্টি' },
  99: { icon: '⛈️', label: 'তীব্র বজ্র ও শিলাবৃষ্টি' }
};

export function wmInfo(code: number): WmEntry {
  return WM[code] || { icon: '🌡️', label: 'তথ্য নেই' };
}

// বাংলা সংখ্যা/তারিখ ফরম্যাট (লোকেল সাপোর্ট না থাকলে সাধারণ সংখ্যায় ফিরে যায়)
export function bnNum(n: number | string): string {
  try {
    return Number(n).toLocaleString('bn-BD', { maximumFractionDigits: 1 });
  } catch {
    return String(n);
  }
}

export function dayLabel(date: string): string {
  try {
    return new Date(date + 'T00:00:00').toLocaleDateString('bn-BD', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });
  } catch {
    return date;
  }
}

function chipHtml(label: string, value: string): string {
  return (
    '<div class="rounded-xl bg-white p-3"><span class="block text-[11px] font-bold text-[#5d665f]">' +
    label +
    '</span><strong class="mt-0.5 block text-sm text-[#15221b]">' +
    value +
    '</strong></div>'
  );
}

// বর্তমান আবহাওয়ার HTML (কোনো বাহ্যিক ডেটা ছাড়াই সার্ভার ও ক্লায়েন্ট দুই জায়গাতেই একই আউটপুট)
export function buildNowHtml(d: any): string {
  d=validateWeather(d);
  if (!d || !d.current) return '';
  const c = d.current;
  const info = wmInfo(c.weather_code);
  return (
    '<div class="flex flex-wrap items-center gap-5">' +
    '<span class="text-6xl leading-none" aria-hidden="true">' + info.icon + '</span>' +
    '<div>' +
    '<strong class="block text-5xl font-black text-[#15221b]">' + bnNum(Math.round(c.temperature_2m)) + '°সে</strong>' +
    '<span class="mt-1 block font-bold text-[#23654a]">' + info.label + '</span>' +
    '</div>' +
    '</div>' +
    '<div class="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">' +
    chipHtml('অনুভূতি', bnNum(Math.round(c.apparent_temperature)) + '°সে') +
    chipHtml('আর্দ্রতা', bnNum(Math.round(c.relative_humidity_2m)) + '%') +
    chipHtml('বাতাস', bnNum(Math.round(c.wind_speed_10m)) + ' কিমি/ঘণ্টা') +
    chipHtml('বৃষ্টি', bnNum(c.precipitation || 0) + ' মিমি') +
    '</div>'
  );
}

// আগামী ৭ দিনের তালিকার HTML
export function buildDaysHtml(d: any): string {
  d=validateWeather(d);
  if (!d || !d.daily || !d.daily.time) return '';
  const days = d.daily;
  let rows = '';
  days.time.forEach((date: string, i: number) => {
    const w = wmInfo(days.weather_code[i]);
    const pr =
      days.precipitation_probability_max && days.precipitation_probability_max[i] != null
        ? bnNum(days.precipitation_probability_max[i]) + '%'
        : '—';
    rows +=
      '<li class="grid min-w-0 grid-cols-2 items-center gap-2 py-3 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_auto]">' +
      '<span class="min-w-0 text-sm font-black text-[#15221b]">' + dayLabel(date) + '</span>' +
      '<span class="shrink-0 text-lg" aria-hidden="true">' + w.icon + '</span>' +
      '<span class="min-w-0 whitespace-normal break-words text-sm text-[#4d5751]">' + w.label + '</span>' +
      '<span class="shrink-0 text-sm font-bold text-[#15221b]">' +
      bnNum(Math.round(days.temperature_2m_min[i])) + '° / ' + bnNum(Math.round(days.temperature_2m_max[i])) + '°সে</span>' +
      '<span class="shrink-0 rounded-full bg-[#173d30]/10 px-2 py-0.5 text-xs font-bold text-[#173d30]">বৃষ্টি ' + pr + '</span>' +
      '</li>';
  });
  return '<ul class="divide-y divide-[#8a2e2a]/10">' + rows + '</ul>';
}

/* ------------------------------------------------------------------ */
/* ভিজিটর-উপযোগী স্মার্ট পরামর্শ (বুদ্ধিমান সুপারিশ ইঞ্জিন)              */
/* লক্ষ্য: কাঁচা আবহাওয়া-সংখ্যা নয় — দর্শনার্থী "কী করবেন" সরাসরি পান।    */
/* দৃশ্যপট-অভিযোজন: জাতীয় স্মৃতিসৌধ = খোলা প্রাঙ্গণ/মাঠ ও জলাশয়,        */
/* তাই উপকূল-পর্বত-রিসোর্ট-জাতীয় পরামর্শ (নৌকা/কেবল-কার ইত্যাদি) এখানে   */
/* ইচ্ছাকৃতভাবে নেই; বদলে মাঠে রোদ, বৃষ্টি, বাতাস, বজ্র ও পিচ্ছিল পথের     */
/* কথা বলা হয়। শুধু প্রাসঙ্গিক শর্তে প্রাসঙ্গিক পরামর্শই রেন্ডার হয়।      */
/* ------------------------------------------------------------------ */

const kindOf = (code: number): string => {
  if (code <= 1) return 'clear';
  if (code === 2) return 'partly';
  if (code === 3) return 'overcast';
  if (code === 45 || code === 48) return 'fog';
  if (code >= 51 && code <= 57) return 'drizzle';
  if ([61,63,66,80,81].includes(code)) return 'rain';
  if ([65,67,82].includes(code)) return 'heavy';
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return 'snow';
  if (code >= 95) return 'thunder';
  return 'clear';
};

interface Advice {
  risks: string[];
  dress: string[];
  plan: string[];
  gear: string[];
}

const num = (v: unknown): number => {
  const x = Number(v);
  return Number.isFinite(x) ? x : 0;
};
const arrN = (arr: unknown, i: number): number | null => {
  if (Array.isArray(arr) && arr[i] != null && Number.isFinite(Number(arr[i]))) return Number(arr[i]);
  return null;
};

export function wxAdvice(d: any): Advice {
  d=validateWeather(d);
  const advice: Advice = { risks: [], dress: [], plan: [], gear: [] };
  if (!d || !d.current) return advice;
  const add = (list: keyof Advice, s: string) => {
    if (s && advice[list].indexOf(s) === -1) advice[list].push(s);
  };

  const cur = d.current || {};
  const curKind = kindOf(num(cur.weather_code));
  const curTemp = num(cur.temperature_2m);
  const wind = num(cur.wind_speed_10m);
  const hum = num(cur.relative_humidity_2m);

  const dl = d.daily || {};
  const todayMax = arrN(dl.temperature_2m_max, 0) ?? curTemp;
  const todayMin = arrN(dl.temperature_2m_min, 0) ?? curTemp;
  const prob = arrN(dl.precipitation_probability_max, 0);
  const uv = arrN(dl.uv_index_max, 0);
  const todayKind = dl.weather_code ? kindOf(num(dl.weather_code[0])) : curKind;

  const hot = curTemp >= 32 || todayMax >= 32;
  const coldStrong = todayMax <= 10;
  const coldMorning = !coldStrong && curTemp <= 12;
  const diffLarge = todayMax - todayMin > 8;
  const thunderish = todayKind === 'thunder' || curKind === 'thunder';
  const adverse = ['fog', 'drizzle', 'rain', 'heavy', 'snow', 'thunder'].indexOf(todayKind) > -1;

  // 2) বজ্রঝড়
  if (thunderish) {
    add('risks', 'বজ্রঝড়ের আশঙ্কা — খোলা প্রাঙ্গণে বজ্রপাতের ঝুঁকি বেশি। বজ্রপাত শুরু হলে মাঠ, উঁচু খোলা জায়গা, গাছ ও পানির ধার ছেড়ে পাকা আশ্রয়ে যান।');
    add('plan', 'বিদ্যুৎ-বজ্রের সময় প্রাঙ্গণে থাকা নিরাপদ নয়; আকাশ গর্জন করলেই আশ্রয়ে চলে যাওয়ার পরিকল্পনা রাখুন।');
  }
  // 3) ভারী বৃষ্টি
  else if (todayKind === 'heavy' || curKind === 'heavy') {
    add('risks', 'প্রবল বৃষ্টি: খোলা প্রাঙ্গণ ও পথ দ্রুত ভিজে ওঠে, পিচ্ছিল হয়। ভেজা পাথর/মেঝেতে সাবধানে হাঁটুন।');
    add('plan', 'ভারী বৃষ্টিতে খোলা মাঠে ঘোরা কঠিন; বৃষ্টি কমা পর্যন্ত ছাউনিযুক্ত আশ্রয়ে অপেক্ষা করুন, তারপর ঘোরার পরিকল্পনা নিন।');
    add('gear', 'রেইনকোটই ভালো; ভারী বাতাসে লম্বা ছাতা ঝামেলা করতে পারে');
  }
  // 4) মাঝারি বৃষ্টি / ঝিরিঝিরি
  else if (todayKind === 'rain' || curKind === 'rain') {
    add('plan', 'মডেলে বৃষ্টি দেখানো হয়েছে — ছাতা বা রেইনকোট রাখুন; ভেজা পথে সতর্ক থাকুন।');
    add('gear', 'ভাঁজ করা ছাতা বা হালকা রেইনকোট');
  } else if (todayKind === 'drizzle' || curKind === 'drizzle') {
    add('plan', 'মডেলে গুঁড়ি গুঁড়ি বৃষ্টি; যাওয়ার আগে আসল পথ ও প্রবেশের অবস্থা যাচাই করুন।');
    add('gear', 'ছোট ভাঁজ করা ছাতা');
  }
  // 5) বৃষ্টির সম্ভাবনা বেশি (প্রবল বৃষ্টি/বজ্র ছাড়া)
  if (prob != null && prob >= 60 && ['rain', 'heavy', 'drizzle', 'thunder', 'snow'].indexOf(todayKind) === -1) {
    add('plan', 'বৃষ্টির সম্ভাবনা অনেক বেশি — বেরোনোর আগেই ছাতা/রেইনকোট গুছিয়ে নিন।');
    add('gear', 'ছাতা বা হালকা রেইনকোট');
  }

  // 6) কুয়াশা/ধোঁয়াশা (সড়ক-দৃশ্য অভিযোজিত)
  if (todayKind === 'fog' || curKind === 'fog') {
    add('risks', 'মডেলে কুয়াশা/ধোঁয়াশা; আসল দৃশ্যমানতা যাচাই করুন — সড়ক ও হাঁটার পথে সাবধান; দূর থেকে স্মৃতিসৌধের দৃশ্য অস্পষ্ট লাগতে পারে।');
    add('plan', 'আসল দৃশ্যমানতা ও বর্তমান সরকারি পূর্বাভাস দেখে কেবল নিশ্চিত খোলা সময়ে রুট ঠিক করুন; কুয়াশা কখন কাটবে বা দৃশ্য পরিষ্কার হবে তা নিশ্চিত নয়।');
  }

  // 7) তুষার (বিরল; নিরাপত্তা-নোট হিসেবে)
  if (todayKind === 'snow' || curKind === 'snow') {
    add('risks', 'ঠান্ডা-বৃষ্টি/তুষারকণা — পথ পিচ্ছিল হতে পারে; গরম পোশাক পরুন ও সাবধানে হাঁটুন।');
  }

  // 8) তাপপ্রবাহ
  if (hot) {
    add('dress', 'গরম বেশি — হালকা, ঢিলেঢালা ও সুতির পোশাক; রোদ এড়াতে টুপি বা ওড়না রাখুন।');
    add('plan', 'নিশ্চিত খোলা সময়ের মধ্যেও বেশি গরমে রুট ছোট করুন; মাঝেমধ্যে ছায়ায় বিশ্রাম নিন।');
    add('gear', 'পানীয় জল (পর্যাপ্ত), সানস্ক্রিন, টুপি/ছাতা');
    if (hum >= 80) add('plan', 'আর্দ্রতাও বেশি — ঘাম বেশি হবে, তাই বারবার পানি পান করুন।');
  }
  // 9) অতিবেগুনি (UV)
  if (uv != null && uv >= 5) {
    add('gear', 'সানস্ক্রিন, রোদচশমা ও টুপি/স্কার্ফ');
    if (!hot) add('plan', 'রোদ শক্তিশালী — খোলা মাঠে দীর্ঘক্ষণ থাকলে মাঝে ছায়ায় বিশ্রাম নিন; দুপুরের দীর্ঘ রোদ এড়ান।');
  }
  // 10) শীত
  if (coldStrong) {
    add('dress', 'আবহাওয়া ঠান্ডা — মোটা জ্যাকেট, সোয়েটার ও স্কার্ফ সঙ্গে নিন; সকাল-সন্ধ্যায় সবচেয়ে ঠান্ডা লাগবে।');
    add('gear', 'গরম জ্যাকেট, স্কার্ফ');
  } else if (coldMorning) {
    add('dress', 'সকাল ও সন্ধ্যায় ঠান্ডা — হালকা সোয়েটার বা উইন্ডপ্রুফ জ্যাকেট রাখুন।');
  }
  // 11) দিন-রাতের ব্যবধান
  if (diffLarge && !hot && !coldStrong && todayKind !== 'snow') {
    add('dress', 'দিন-রাতের তাপমাত্রার পার্থক্য বেশ — স্তরে স্তরে পোশাক পরুন, প্রয়োজনে জ্যাকেট খুলে/পরে নিতে পারবেন।');
  }

  // 12) বাতাস (খোলা মাঠ অভিযোজিত)
  if (wind >= 50) {
    add('risks', 'প্রবল বাতাস — খোলা মাঠে ধুলা ও হালকা বস্তু ওড়ে; ছাতা সামলানো কঠিন, উঁচু গাছের নিচে দাঁড়ানো এড়িয়ে চলুন।');
    add('plan', 'প্রবল বাতাসে ছাতা/টুপি ঝুঁকিতে — ঘোরার সময় হালকা ও ঢিলেঢালা পোশাক বাদ দিন, নিরাপদ পথ মাথায় রাখুন।');
  } else if (wind >= 29) {
    add('plan', 'বাতাস টের পাওয়ার মতো বইছে — টুপি/ওড়না ভালো করে সামলে রাখুন; ছবির সময় মাথার চুল ঠিক রাখতে পারেন।');
    if (todayKind !== 'snow' && !thunderish) add('gear', 'ক্যাপ/স্কার্ফ (উড়ে যাওয়া রোধে)');
  }

  // 13) পরিষ্কার/মেঘলা দিনের ইতিবাচক পরিকল্পনা (শুধু বিরূপ আবহাওয়া নেই এমন দিনে)
  if (!adverse && !hot) {
    if (todayKind === 'clear' || todayKind === 'partly') {
      add('plan', 'মডেলে আকাশ পরিষ্কার বা আংশিক মেঘলা; তাপ, UV এবং নিশ্চিত খোলা সময় দেখে সফর ঠিক করুন।');
    } else if (todayKind === 'overcast') {
      add('plan', 'মডেলে মেঘলা আকাশ; তাতে কম UV বা আরাম নিশ্চিত নয়। ছবি ও হাঁটার আগে আসল পরিস্থিতি দেখুন।');
    }
  }
  // 14) পানীয় জল (নিরাপদ স্বাভাবিক দিনে)
  if (!hot && !coldStrong && !adverse && todayKind !== 'fog' && (prob == null || prob < 60) && todayMax >= 26) {
    add('gear', 'পানীয় জল (খোলা প্রাঙ্গণে ছায়া কম)');
  }

  return advice;
}

export function buildAdviceHtml(d: any): string {
  d=validateWeather(d);
  if (!d || !d.current) return '';
  const a = wxAdvice(d);

  const risksShown = a.risks.slice(0, 3); // cap red-panel length: 3 items max
  let riskHtml = '';
  if (risksShown.length) {
    riskHtml =
      '<div class="rounded-2xl border border-[#8a2e2a]/25 bg-[#8a2e2a]/10 p-4 sm:p-5">' +
      '<p class="flex items-center gap-2 text-sm font-black text-[#7c231f]"><span aria-hidden="true">⚠️</span><span>মডেলভিত্তিক সতর্কতা — সরকারি বার্তা নয়</span></p>' +
      risksShown
        .map((t) => '<p class="mt-1.5 text-sm leading-6 text-[#6e211d]">' + t + '</p>')
        .join('') +
      '</div>';
  }

  const blocks: Array<[string, string, string[]]> = [
    ['🧥', 'পোশাক-পরামর্শ', a.dress],
    ['🗺️', 'ঘোরার পরিকল্পনা', a.plan],
    ['🎒', 'সঙ্গে রাখবেন', a.gear]
  ];
  let blockHtml = '';
  blocks.forEach((b) => {
    if (!b[2].length) return;
    blockHtml +=
      '<div class="rounded-2xl bg-white p-4 shadow-sm sm:p-5">' +
      '<p class="flex items-center gap-2 text-sm font-black text-[#173d30]"><span aria-hidden="true">' + b[0] + '</span><span>' + b[1] + '</span></p>' +
      '<ul class="mt-2 space-y-1.5">' +
      b[2]
        .map(
          (it) =>
            '<li class="flex gap-2.5 text-[14px] leading-6 text-[#3d4a42]"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8a2e2a]"></span><span>' + it + '</span></li>'
        )
        .join('') +
      '</ul></div>';
  });

  if (blockHtml) blockHtml = '<div class="mt-3 grid gap-3 lg:grid-cols-3">' + blockHtml + '</div>';
  const out = riskHtml + blockHtml;
  if (!out) {
    return '<p class="text-sm leading-6 text-[#4d5751]">বিশেষ মডেল-ভিত্তিক পরামর্শ নেই। আসল আবহাওয়া, প্রবেশ ও স্থানীয় নির্দেশনা যাচাই করুন।</p>';
  }
  return out;
}
