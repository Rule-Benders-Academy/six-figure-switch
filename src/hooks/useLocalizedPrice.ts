import { useEffect, useMemo, useState } from "react";
import { getVisitorCountry, getUsdToGbpRate, formatMoney } from "@/lib/geoFx";

type Options = { usdPrice: number; roundPounds?: boolean };

export function useLocalizedPrice({ usdPrice, roundPounds = true }: Options) {
  const [country, setCountry] = useState<string | null>(null);
  const [rate, setRate] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const c = await getVisitorCountry();
      if (!mounted) return;
      setCountry(c || null);

      if (c === "GB") {
        try {
          const r = await getUsdToGbpRate();
          if (mounted) setRate(r);
        } catch {}
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return useMemo(() => {
    let currency: "USD" | "GBP" = "USD";
    let amount = usdPrice;
    let isConverted = false;

    if (country === "GB" && rate) {
      currency = "GBP";
      amount = usdPrice * rate;
      isConverted = true;
      if (roundPounds) amount = Math.round(amount); // whole pounds
    }
    return {
      currency,
      amount,
      display: formatMoney(amount, currency),
      isConverted,
      rate,
      country,
    };
  }, [usdPrice, country, rate, roundPounds]);
}
