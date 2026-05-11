import { useMemo } from 'react';
import type { Experience } from '@/types/experience';

export type FilterParams = {
  search: string;
  category: string;
  destination: string;
};

/**
 * Applies regex title search plus optional category/destination filters.
 * Category and destination are independent and combine with the search term.
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

    if (category) {
      list = list.filter((e) => e.category === category);
    }

    if (destination) {
      const needle = destination.toLowerCase();
      list = list.filter((e) => e.destination.toLowerCase().includes(needle));
    }

    return list;
  }, [experiences, search, category, destination]);
}
