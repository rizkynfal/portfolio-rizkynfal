export function isTablet(screenSize) {
  return screenSize < 900 && screenSize >= 650;
}

export function isMobile(screenSize) {
  return screenSize < 650;
}
