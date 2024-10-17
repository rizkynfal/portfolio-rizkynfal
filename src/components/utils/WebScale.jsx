export function isTablet(screenSize) {
  return screenSize < 900 && screenSize >= 700;
}

export function isMobile(screenSize) {
  return screenSize < 700;
}
