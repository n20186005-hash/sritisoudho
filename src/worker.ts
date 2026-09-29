/**
 * ক্যানোনিক্যাল ইউআরএল বাধ্যতামূলক করার জন্য হালকা অ্যাসেট-ওয়ার্কার।
 *
 * GSC তথ্য অনুযায়ী একই পাতা তিনটি ভিন্ন ইউআরএলে (https://sritisoudho.com,
 * http://sritisoudho.com, https://www.sritisoudho.com) ইনডেক্স হয়ে ওজন ভাগ হয়ে যাচ্ছিল।
 * এই ওয়ার্কারটি সব প্রকারের অনুরোধকে একটিমাত্র ক্যানোনিক্যাল ইউআরএলে 301 রিডাইরেক্ট করে:
 *
 *   http://sritisoudho.com/*      → https://sritisoudho.com/*      (301)
 *   http://www.sritisoudho.com/*  → https://sritisoudho.com/*      (301)
 *   https://www.sritisoudho.com/* → https://sritisoudho.com/*      (301)
 *
 * এরপর অনুরোধটি static asset binding-এ পাঠানো হয় এবং নিরাপত্তা-হেডার যোগ করা হয়।
 */

const CANONICAL_HOST = 'sritisoudho.com';

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

interface AssetsEnv {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
}

const withSecurityHeaders = (response: Response): Response => {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) headers.set(key, value);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
};

export default {
  async fetch(request: Request, env: AssetsEnv): Promise<Response> {
    const url = new URL(request.url);
    const host = url.hostname.toLowerCase();

    if (url.protocol === 'http:' || host === `www.${CANONICAL_HOST}`) {
      const destination = new URL(request.url);
      destination.protocol = 'https:';
      destination.hostname = CANONICAL_HOST;
      destination.port = '';
      return new Response(null, {
        status: 301,
        headers: {
          location: destination.toString(),
          'cache-control': 'public, max-age=86400'
        }
      });
    }

    const response = await env.ASSETS.fetch(request);

    // Worker-থেকে অ্যাসেট সরবরাহের সময় 404-page বান্ডেল না পেলেও যাতে নিজস্ব ৪০৪ পাতাটি দেখা যায়।
    if (response.status === 404 && request.method === 'GET' && url.pathname !== '/404/') {
      const notFoundUrl = new URL(request.url);
      notFoundUrl.pathname = '/404/';
      const fallback = await env.ASSETS.fetch(new Request(notFoundUrl.toString(), request));
      if (fallback.ok) {
        return new Response(fallback.body, { status: 404, headers: withSecurityHeaders(fallback).headers });
      }
    }

    return withSecurityHeaders(response);
  }
};
