"use client";

import { ParallaxProvider } from "react-scroll-parallax";

export function Provider({ children, scrollDirection }) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}
