import type { Locale } from "./config";
import type { Dictionary } from "@/dictionaries/types";

const loaders: Record<Locale, () => Promise<{ default: Dictionary }>> = {
  es: () => import("@/dictionaries/es"),
  en: () => import("@/dictionaries/en"),
  fr: () => import("@/dictionaries/fr"),
  de: () => import("@/dictionaries/de"),
  pt: () => import("@/dictionaries/pt"),
  ar: () => import("@/dictionaries/ar"),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const loader = loaders[locale] ?? loaders.es;
  const mod = await loader();
  return mod.default;
}
