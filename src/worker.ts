

// Google Maps এম্বেড (frame-src), GA4 (script/connect-src) ও Open-Meteo পূর্বাভাস (connect-src) অনুমোদিত — অন্য সব বন্ধ।
const CSP = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com https://maps.gstatic.com https://maps.google.com https://*.googleusercontent.com https://*.ggpht.com",
  "frame-src https://www.google.com https://maps.google.com",
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://api.open-meteo.com"
].join('; ');

const SECURITY_HEADERS: Record<string, string> = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Frame-Options': 'SAMEORIGIN',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Content-Security-Policy': CSP
};

interface Env {ASSETS:{fetch:(r:Request)=>Promise<Response>}}
const errors=new Set(['/404','/404/','/404.html']);
async function errorPage(request:Request,env:Env){const url=new URL(request.url);let path='/404',response:Response|undefined;for(let i=0;i<3;i++){response=await env.ASSETS.fetch(new Request(new URL(path,url.origin)));if(![301,302,307,308].includes(response.status))break;const next=new URL(response.headers.get('location')||path,url.origin);if(next.origin!==url.origin||!errors.has(next.pathname))break;path=next.pathname+next.search;}const headers=new Headers(response?.headers);headers.delete('location');headers.delete('content-length');headers.delete('content-encoding');headers.set('x-robots-tag','noindex');headers.set('cache-control','no-store');headers.set('content-type','text/html; charset=utf-8');const body=response&&!([301,302,307,308].includes(response.status))?await response.text():'';return new Response(request.method==='HEAD'?null:body||'<!doctype html><title>404</title><h1>পাতা পাওয়া যায়নি</h1><a href="/">জাতীয় স্মৃতিসৌধ</a>',{status:404,headers});}
export default {async fetch(request:Request,env:Env){const u=new URL(request.url);if(u.hostname==='www.sritisoudho.com'||(u.hostname==='sritisoudho.com'&&u.protocol==='http:')){u.protocol='https:';u.hostname='sritisoudho.com';return new Response(null,{status:308,headers:{location:u.href}});}let response:Response;if(errors.has(u.pathname))response=await errorPage(request,env);else{response=await env.ASSETS.fetch(request);if(response.status===404)response=await errorPage(request,env);}const secured=new Headers(response.headers);for(const[k,v]of Object.entries(SECURITY_HEADERS))secured.set(k,v);return new Response(request.method==='HEAD'?null:response.body,{status:response.status,headers:secured});}};
