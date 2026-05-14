'use client';

import { useMemo } from 'react';
import { normalizeCategoryQueryParam } from '@/constants/categories';
import type { Experience } from '@/types/experience';

export type FilterParams = {
  search: string;
  category: string;
  destination: string;
};

/**
 * Applies regex title search plus optional category/destination filters.
 * Category and destination are independent and combine with the search term.
 * Category matching is case-insensitive so shareable URLs can use `category=adventure`.
 */
export function useExperienceFilters(
  experiences: Experience[],
  { search, category, destination }: FilterParams,
): Experience[] {
  return useMemo(() => {
    let list = experiences;

    const term = search.trim();
    if (term) {
      try {
        const re = new RegExp(term, 'i');
        list = list.filter((e) => re.test(e.title));
      } catch {
        list = [];
      }
    }

    const canonicalCategory = normalizeCategoryQueryParam(category);
    if (canonicalCategory) {
      list = list.filter((e) => e.category === canonicalCategory);
    }

    if (destination.trim()) {
      const needle = destination.toLowerCase();
      list = list.filter((e) => e.destination.toLowerCase().includes(needle));
    }

    return list;
  }, [experiences, search, category, destination]);
}
