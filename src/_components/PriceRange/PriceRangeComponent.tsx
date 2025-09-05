"use client";
import React from "react";
import { useLocalizedPrice } from "@/hooks/useLocalizedPrice";

export default function PriceRange({
  minUsd,
  maxUsd,
}: {
  minUsd: number;
  maxUsd: number;
}) {
  const a = useLocalizedPrice({ usdPrice: minUsd, roundPounds: true });
  const b = useLocalizedPrice({ usdPrice: maxUsd, roundPounds: true });
  // same currency both sides because hook ensures either USD or GBP
  const sep = " to ";
  return (
    <span className="font-bold">
      {a.display}
      {sep}
      {b.display}
    </span>
  );
}
