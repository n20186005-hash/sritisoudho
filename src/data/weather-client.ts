import {validateWeather,fetchWeather,buildNowHtml,buildDaysHtml,buildAdviceHtml,TTL,type Forecast} from './weather';
export async function initWeather(){
 const byId=(id:string)=>document.getElementById(id),now=byId('wx-now'),days=byId('wx-days'),advice=byId('wx-advice'),note=byId('wx-note');if(!now||!days||!advice)return;
 let current:Forecast|null=null;
 const render=(d:unknown,message='')=>{const valid=validateWeather(d);now.innerHTML=buildNowHtml(valid);days.innerHTML=buildDaysHtml(valid);advice.innerHTML=buildAdviceHtml(valid);if(note)note.textContent='মডেলের সময়: '+valid.current.time.replace('T',' ')+' · Asia/Dhaka (UTC+6)। '+message+' এটি পূর্বাভাস, সরকারি সতর্কতা বা প্রবেশের ঘোষণা নয়।';current=valid;};
 const clear=()=>{now.innerHTML='<p>আবহাওয়ার তথ্য এখন উপলব্ধ নয়; বর্তমান সরকারি পূর্বাভাস দেখুন।</p>';days.innerHTML='';advice.innerHTML='';if(note)note.textContent='সাম্প্রতিক তথ্য পাওয়া যায়নি। বর্তমান সরকারি পূর্বাভাস ও স্থানীয় নির্দেশনা দেখুন।';current=null;};
 try{render(JSON.parse(byId('wx-init')?.textContent||'null'),'পাতা তৈরির সময়ের পূর্বাভাস।');}catch{clear();}
 try{const c=JSON.parse(localStorage.getItem('nmm_weather_v3')||'null'),age=Date.now()-c?.t;if(c&&Number.isFinite(c.t)&&age>=0&&age<TTL)render(c.data,'সাম্প্রতিক সংরক্ষিত পূর্বাভাস।');}catch{}
 try{const data=await fetchWeather();render(data);try{localStorage.setItem('nmm_weather_v3',JSON.stringify({t:Date.now(),data}));}catch{}}
 catch{if(current){try{render(current,'সাম্প্রতিক রিফ্রেশ ব্যর্থ; দেখানো মডেলের সময় লক্ষ্য করুন।');}catch{clear();}}else clear();}
}
