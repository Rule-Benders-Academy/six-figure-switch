"use client";
/* eslint-disable */
// @ts-ignore
export function fbqSafe(...args: any[]) {
  if (
    typeof window !== "undefined" &&
    typeof (window as any).fbq === "function"
  ) {
    (window as any).fbq(...args);
  }
}

export function fbTrack(event: string, params?: Record<string, any>) {
  fbqSafe("track", event, params);
}

export function fbTrackCustom(event: string, params?: Record<string, any>) {
  fbqSafe("trackCustom", event, params);
}
