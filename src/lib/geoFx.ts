// lib/geoFx.ts
type FxCache = { rate: number; fetchedAt: number };
const FX_CACHE_KEY = "usd_gbp_rate_v1";
const FX_TTL_MS = 12 * 60 * 60 * 1000; // 12h

export async function getVisitorCountry(): Promise<string | null> {
  try {
    const res = await fetch("https://ipapi.co/json/");
    if (!res.ok) throw new Error("geo failed");
    const data = await res.json();
    return typeof data?.country === "string" ? data.country : null; // "GB", "US", etc.
  } catch {
    // Fallback: try browser locale like "en-GB"
    try {
      const loc =
        navigator.language ||
        (Array.isArray(navigator.languages) && navigator.languages[0]);
      const region = loc?.split("-")[1]?.toUpperCase();
      return region || null;
    } catch {
      return null;
    }
  }
}

export async function getUsdToGbpRate(): Promise<number> {
  try {
    const cached = localStorage.getItem(FX_CACHE_KEY);
    if (cached) {
      const obj: FxCache = JSON.parse(cached);
      if (Date.now() - obj.fetchedAt < FX_TTL_MS && Number.isFinite(obj.rate))
        return obj.rate;
    }
  } catch {}

  const res = await fetch(
    "https://api.exchangerate.host/latest?base=USD&symbols=GBP"
  );
  if (!res.ok) throw new Error("fx failed");
  const data = await res.json();
  const rate = Number(data?.rates?.GBP);
  if (!Number.isFinite(rate)) throw new Error("bad rate");

  try {
    localStorage.setItem(
      FX_CACHE_KEY,
      JSON.stringify({ rate, fetchedAt: Date.now() })
    );
  } catch {}
  return rate;
}

export function formatMoney(amount: number, currency: "USD" | "GBP") {
  const locale = currency === "GBP" ? "en-GB" : "en-US";
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    amount
  );
}
