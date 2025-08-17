"use client";

import { useEffect, useState } from "react";
import { initializePaddle, Paddle } from "@paddle/paddle-js";

export default function PaddleLauncher() {
  const [paddle, setPaddle] = useState<Paddle | null>(null);

  // Initialize Paddle once
  useEffect(() => {
    async function setupPaddle() {
      const paddleInstance = await initializePaddle({
        environment: "sandbox", // change to "production" later
        token: "test_54582be026d4c9f2fa58438f0ac",
      });
      
      if (paddleInstance) {
        setPaddle(paddleInstance); // only set if it's not undefined
      }
    }
    setupPaddle();
  }, []);

  useEffect(() => {
    const handleOpen = () => {
      if (!paddle) return;

      paddle.Checkout.open({
        items: [
          {
            priceId: "pri_01k2hgf7zb8d3mcvqe26sypn0z", // no quantity field
          },
        ],
        settings: {
          displayMode: "overlay",
          theme: 'dark'
        },
      });
    };

    window.addEventListener("openDrawer", handleOpen);

    return () => {
      window.removeEventListener("openDrawer", handleOpen);
    };
  }, [paddle]);

  return null; // nothing rendered
}
