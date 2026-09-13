export const solutionSlugs = [
  "servicios",
  "sectores",
  "precios",
  "motor",
  "white-label",
  "academy",
  "casos-de-exito",
] as const;

export type SolutionSlug = (typeof solutionSlugs)[number];

export function isSolutionSlug(value: string): value is SolutionSlug {
  return (solutionSlugs as readonly string[]).includes(value);
}

export const solutionSlugToDictKey = {
  servicios: "services",
  sectores: "sectors",
  precios: "pricing",
  motor: "engine",
  "white-label": "whiteLabel",
  academy: "academy",
  "casos-de-exito": "testimonials",
} as const;
