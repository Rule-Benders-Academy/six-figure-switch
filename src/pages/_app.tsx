"use client";
/* eslint-disable */
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";
import Head from "next/head";
import { useRouter } from "next/router";

/* eslint-disable @next/next/no-img-element */
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Crisp
    Crisp.configure("92580adf-bda9-44c7-a1ce-a83b917cea7b");
  }, []);

  // GA
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-R7Q2CRPHS8";
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-R7Q2CRPHS8');
    `;
    document.head.appendChild(script2);

    return () => {
      if (script1.parentNode) script1.parentNode.removeChild(script1);
      if (script2.parentNode) script2.parentNode.removeChild(script2);
    };
  }, []);
  

  useEffect(() => {
    // Track only if the visitor came from Meta ads
    const META_SESSION_KEY = "meta_ad_session";

    const markIfFromMetaAd = () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const hasFbclid = params.has("fbclid");
        const src = (params.get("utm_source") || "").toLowerCase();
        const med = (params.get("utm_medium") || "").toLowerCase();

        const srcIsMeta = ["facebook", "meta", "instagram"].includes(src);
        const mediumLooksPaid =
          !med || /(paid|paid_social|cpc|ppc|ads?)/i.test(med);

        if (hasFbclid || (srcIsMeta && mediumLooksPaid)) {
          sessionStorage.setItem(META_SESSION_KEY, "1");
        }
      } catch {
        // ignore
      }
    };

    const loadMetaPixelIfNeeded = () => {
      const isMetaSession = sessionStorage.getItem(META_SESSION_KEY) === "1";
      if (!isMetaSession) return;

      // Load Meta Pixel only now
      if (!(window as any).fbq) {
        (function (f: any, b: Document, e: string, v: string) {
          if (f.fbq) return;
          const n: any = (f.fbq = function () {
            n.callMethod
              ? n.callMethod.apply(n, arguments)
              : n.queue.push(arguments);
          });
          if (!f._fbq) f._fbq = n;
          n.push = n;
          n.loaded = true;
          n.version = "2.0";
          n.queue = [];
          const t = b.createElement(e) as HTMLScriptElement;
          t.async = true;
          t.src = v;
          const s = b.getElementsByTagName(e)[0];
          s?.parentNode?.insertBefore(t, s);
        })(
          window,
          document,
          "script",
          "https://connect.facebook.net/en_US/fbevents.js"
        );
      }

      (window as any).fbq("init", "740601925279946");
      (window as any).fbq("track", "PageView");
    };

    markIfFromMetaAd();
    loadMetaPixelIfNeeded();

    // Fire PageView on route changes for SPA navigation, only when Pixel is active
    const onRouteChange = () => {
      if (
        (window as any).fbq &&
        sessionStorage.getItem(META_SESSION_KEY) === "1"
      ) {
        (window as any).fbq("track", "PageView");
      }
    };

    router.events.on("routeChangeComplete", onRouteChange);
    return () => {
      router.events.off("routeChangeComplete", onRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Domain verification */}
      <Head>
        <meta
          name="facebook-domain-verification"
          content="37mjzeust6hsewa26wseaztnephvi1"
        />
      </Head>

      {/* Hotjar */}
      <Script
        id="hotjar-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:6508670,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        }}
      />

      {/* USD → GBP and USD → EUR Converter */}
      <Script
        id="usd-to-gbp-eur-converter"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              var Q = new URLSearchParams(location.search);
              var FORCE_COUNTRY = (Q.get('forceCountry') || '').toUpperCase();
              var FX_OVERRIDE  = Q.get('fx') ? Number(Q.get('fx')) : null;
              var DISABLE      = Q.get('noconvert') === '1';
              var FX_CACHE_KEY = "usd_fx_gbp_eur_v1";
              var FX_TTL_MS    = 12*60*60*1000;
              var FALLBACK_GBP = 0.78;
              var FALLBACK_EUR = 0.85;

              if (DISABLE) return;

              function isUK(){
                if (FORCE_COUNTRY) return FORCE_COUNTRY === 'GB';
                try {
                  var loc = Intl.DateTimeFormat().resolvedOptions().locale || '';
                  return /(^|-)GB\\b/i.test(loc) || loc.toUpperCase().includes('EN-GB');
                } catch { return false; }
              }

              function isEU(){
                if (FORCE_COUNTRY) return FORCE_COUNTRY === 'EU';
                try {
                  var loc = Intl.DateTimeFormat().resolvedOptions().locale || '';
                  return /(^|-)EU\\b/i.test(loc) || loc.toUpperCase().includes('EN-EU');
                } catch { return false; }
              }

              if (!isUK() && !isEU()) return;

              function getCachedFx(){
                try {
                  var raw = localStorage.getItem(FX_CACHE_KEY);
                  if (!raw) return null;
                  var obj = JSON.parse(raw);
                  if (Date.now() - obj.fetchedAt < FX_TTL_MS && Number.isFinite(obj.gbp) && Number.isFinite(obj.eur)) {
                    return { gbp: obj.gbp, eur: obj.eur };
                  }
                } catch {}
                return null;
              }

              function setCachedFx(fx){
                try { localStorage.setItem(FX_CACHE_KEY, JSON.stringify({ gbp: fx.gbp, eur: fx.eur, fetchedAt: Date.now() })); } catch {}
              }

              function fetchFx(){
                var cached = getCachedFx();
                if (cached) return Promise.resolve(cached);

                if (FX_OVERRIDE && Number.isFinite(FX_OVERRIDE)) {
                  var o = { gbp: FX_OVERRIDE, eur: FALLBACK_EUR };
                  setCachedFx(o);
                  return Promise.resolve(o);
                }

                return fetch('https://api.exchangerate.host/latest?base=USD&symbols=GBP,EUR')
                  .then(r => r.json())
                  .then(j => {
                    var gbpRate = Number(j && j.rates && j.rates.GBP);
                    var eurRate = Number(j && j.rates && j.rates.EUR);
                    if (!Number.isFinite(gbpRate) || !Number.isFinite(eurRate)) throw new Error('bad rate');
                    var o = { gbp: gbpRate, eur: eurRate };
                    setCachedFx(o);
                    return o;
                  })
                  .catch(function(){
                    return { gbp: FALLBACK_GBP, eur: FALLBACK_EUR };
                  });
              }

              var formatterGBP = new Intl.NumberFormat('en-GB', {
                style: 'currency',
                currency: 'GBP',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
              });

              var formatterEUR = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
              });

              function toNumberUSD(str){ return Number(String(str).replace(/,/g,'')); }

              // round to nearest 50
              function roundTo50(n){ return Math.round(n/50)*50; }

              function fmtCurrency(amountUsd, fx, type){
                var rate = type === 'GBP' ? fx.gbp : fx.eur;
                var rounded = roundTo50(amountUsd * rate);
                return type === 'GBP' ? formatterGBP.format(rounded) : formatterEUR.format(rounded);
              }

              var RANGE_RE = /\\$(\\d[\\d,]*(?:\\.\\d+)?)\\s*(?:–|-|to)\\s*\\$?(\\d[\\d,]*(?:\\.\\d+)?)/g;
              var SINGLE_RE = /\\$(\\d[\\d,]*(?:\\.\\d+)?)/g;

              var SKIP_TAGS = new Set(['SCRIPT','STYLE','NOSCRIPT','CODE','KBD','SAMP','PRE','TEXTAREA','INPUT']);
              function isOptOut(node){
                for (var el = node.parentElement; el; el = el.parentElement) {
                  if (el.hasAttribute && (el.hasAttribute('data-no-currency-convert') || el.hasAttribute('data-no-currency-swap'))) return true;
                }
                return false;
              }

              function convertTextNode(node, fx, type){
                var v = node.nodeValue;
                if (!v || v.indexOf('$') === -1) return;
                v = v.replace(RANGE_RE, function(_, a, b){ return fmtCurrency(toNumberUSD(a), fx, type) + '–' + fmtCurrency(toNumberUSD(b), fx, type); });
                v = v.replace(SINGLE_RE, function(_, num){ return fmtCurrency(toNumberUSD(num), fx, type); });
                node.nodeValue = v;
              }

              function walkAndConvert(root, fx, type){
                var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
                  acceptNode: function(node){
                    var p = node.parentElement;
                    if (!p) return NodeFilter.FILTER_REJECT;
                    if (SKIP_TAGS.has(p.tagName)) return NodeFilter.FILTER_REJECT;
                    if (isOptOut(node)) return NodeFilter.FILTER_REJECT;
                    if (!node.nodeValue || node.nodeValue.indexOf('$') === -1) return NodeFilter.FILTER_REJECT;
                    return NodeFilter.FILTER_ACCEPT;
                  }
                });
                var n;
                while ((n = walker.nextNode())) convertTextNode(n, fx, type);
              }

              fetchFx().then(function(fx){
                function apply(){ 
                  walkAndConvert(document.body, fx, isUK() ? 'GBP' : 'EUR'); 
                }
                if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply);
                else apply();

                var obs = new MutationObserver(function(muts){
                  muts.forEach(function(m){
                    if (m.addedNodes) m.addedNodes.forEach(function(node){
                      if (node.nodeType === 1) walkAndConvert(node, fx, isUK() ? 'GBP' : 'EUR');
                      else if (node.nodeType === 3 && node.parentElement) walkAndConvert(node.parentElement, fx, isUK() ? 'GBP' : 'EUR');
                    });
                  });
                });
                obs.observe(document.body, { childList: true, subtree: true, characterData: true });
              });
            })();
          `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}
/* eslint-enable @next/next/no-img-element */
