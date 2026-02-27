"use client";

import { useEffect } from "react";

const FRAMES = [
  "/favicon/favicon01.png",
  "/favicon/favicon02.png",
  "/favicon/favicon03.png",
  "/favicon/favicon04.png",
  "/favicon/favicon05.png",
];

export default function FaviconAnimator() {
  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }

    let frame = 0;
    const interval = setInterval(() => {
      link!.href = FRAMES[frame];
      frame = (frame + 1) % FRAMES.length;
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return null;
}
