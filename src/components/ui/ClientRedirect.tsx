"use client";

import { useEffect } from "react";

const REDIRECTS: Record<string, string> = {
  "/money/best-vpn-streaming": "/best/vpn-streaming/",
  "/money/best-vpn-gaming": "/best/vpn-gaming/",
  "/money/best-vpn-privacy": "/best/vpn-privacy/",
  "/money/best-vpn-travel": "/best/vpn-travel/",
  "/money/best-vpn-business": "/best/vpn-business/",
  "/money/best-vpn-free-trial": "/best/vpn-free-trial/",
  "/money/best-vpn-router": "/best/vpn-router/",
  "/vpn/best/israel": "/countries/",
  "/vpn/providers/mullvad": "/vpn/providers/",
  "/vpn/vs/nordvpn-vs-mullvad": "/vpn/vs/",
  "/vpn/vs/protonvpn-vs-mullvad": "/vpn/vs/",
  "/vpn/vs/fastestvpn-vs-mullvad": "/vpn/vs/",
  "/newsletter": "/",
  "/vpn/providers/expressvpn": "/vpn/providers/",
  "/vpn/providers/cyberghost": "/vpn/providers/",
};

export default function ClientRedirect() {
  useEffect(() => {
    const path = window.location.pathname.replace(/\/+$/, "") || "/";
    const target = REDIRECTS[path];
    if (target) {
      window.location.replace(target);
    }
  }, []);

  return null;
}
