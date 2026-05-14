import type { ExperienceCategory } from '@/types/experience';

export const EXPERIENCE_CATEGORIES: readonly ExperienceCategory[] = [
  'Adventure',
  'Culture',
  'Food',
  'Wellness',
  'Nature',
] as const;

/** Maps URL/query values like `adventure` to the canonical dataset label `Adventure`. */
export function normalizeCategoryQueryParam(raw: string): ExperienceCategory | '' {
  const t = raw.trim();
  if (!t) return '';
  const match = EXPERIENCE_CATEGORIES.find((c) => c.toLowerCase() === t.toLowerCase());
  return match ?? '';
}
