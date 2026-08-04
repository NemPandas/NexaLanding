import type { Language } from "../i18n";

export function getLocaleFromPath(pathname = window.location.pathname): Language | null {
  const segment = pathname.split("/").filter(Boolean)[0];
  return segment === "hu" || segment === "en" ? segment : null;
}

export function getRoutePath(pathname = window.location.pathname): string {
  const locale = getLocaleFromPath(pathname);
  if (!locale) return pathname.replace(/\/+$/, "") || "/";
  const route = pathname.replace(new RegExp(`^/${locale}`), "").replace(/\/+$/, "");
  return route || "/";
}

export function localizePath(path: string, language?: Language | null): string {
  const locale = language === undefined ? getLocaleFromPath() : language;
  const normalizedPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return locale ? `/${locale}${normalizedPath}` || `/${locale}` : normalizedPath || "/";
}
