export const legalSlugs = ["aviso-legal", "privacidad", "cookies", "terminos"] as const;

export type LegalSlug = (typeof legalSlugs)[number];

export function isLegalSlug(value: string): value is LegalSlug {
  return (legalSlugs as readonly string[]).includes(value);
}

export const legalSlugToKey = {
  "aviso-legal": "aviso",
  privacidad: "privacidad",
  cookies: "cookies",
  terminos: "terminos",
} as const;
