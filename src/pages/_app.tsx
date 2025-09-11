"use client";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";
import Head from "next/head";

/* eslint-disable @next/next/no-img-element */
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize Crisp once
    Crisp.configure("92580adf-bda9-44c7-a1ce-a83b917cea7b");
  }, []);

  return (
    <>
      {/* Meta Pixel Script */}
      <Head>
        <meta
          name="facebook-domain-verification"
          content="37mjzeust6hsewa26wseaztnephvi1"
        />
      </Head>

      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)}; 
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '740601925279946');
            fbq('track', 'PageView');
          `,
        }}
      />

      {/* Hotjar Tracking Code */}
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

      {/* No-JS Fallback Pixel */}
      <div
        dangerouslySetInnerHTML={{
          __html: `<noscript>
            <img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=740601925279946&ev=PageView&noscript=1" />
          </noscript>`,
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
              var FX_CACHE_KEY = "usd_gbp_fx_v1";
              var FX_TTL_MS    = 12*60*60*1000;
              var FALLBACK_FX  = 0.78;
              var EUR_FALLBACK_FX = 0.85;  // EUR to USD fallback rate

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
                  if (Date.now() - obj.fetchedAt < FX_TTL_MS && Number.isFinite(obj.rate)) return obj.rate;
                } catch {}
                return null;
              }

              function setCachedFx(rate){
                try { localStorage.setItem(FX_CACHE_KEY, JSON.stringify({ rate: rate, fetchedAt: Date.now() })); } catch {}
              }

              function fetchFx(){
                if (FX_OVERRIDE && Number.isFinite(FX_OVERRIDE)) return Promise.resolve(FX_OVERRIDE);
                var cached = getCachedFx();
                if (cached) return Promise.resolve(cached);
                return fetch('https://api.exchangerate.host/latest?base=USD&symbols=GBP,EUR')
                  .then(r => r.json())
                  .then(j => {
                    var gbpRate = Number(j && j.rates && j.rates.GBP);
                    var eurRate = Number(j && j.rates && j.rates.EUR);
                    if (!Number.isFinite(gbpRate) || !Number.isFinite(eurRate)) throw new Error('bad rate');
                    setCachedFx({ gbp: gbpRate, eur: eurRate });
                    return { gbp: gbpRate, eur: eurRate };
                  })
                  .catch(() => ({ gbp: FX_OVERRIDE || FALLBACK_FX, eur: EUR_FALLBACK_FX }));
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
                v = v.replace(RANGE_RE, (_, a, b) => fmtCurrency(toNumberUSD(a), fx, type) + '–' + fmtCurrency(toNumberUSD(b), fx, type));
                v = v.replace(SINGLE_RE, (_, num) => fmtCurrency(toNumberUSD(num), fx, type));
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

              fetchFx().then(fx => {
                function apply(){ 
                  walkAndConvert(document.body, fx, isUK() ? 'GBP' : 'EUR'); 
                }
                if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply);
                else apply();

                var obs = new MutationObserver(muts => {
                  muts.forEach(m => {
                    m.addedNodes && m.addedNodes.forEach(node => {
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

      {/* Your app content */}
      <Component {...pageProps} />
    </>
  );
}

/* eslint-enable @next/next/no-img-element */
