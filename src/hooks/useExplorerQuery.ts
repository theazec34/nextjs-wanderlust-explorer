'use client';

import { useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

/**
 * Reads explorer query params and exposes a helper to update them without full reloads.
 * Aligns with the challenge requirement to use `useSearchParams` and `usePathname`.
 */
export function useExplorerQuery() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const search = searchParams.get('search') ?? '';
  const category = searchParams.get('category') ?? '';
  const destination = searchParams.get('destination') ?? '';

  const replaceQuery = useCallback(
    (partial: Record<string, string | undefined>) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(partial).forEach(([key, value]) => {
        const trimmed = value?.trim();
        if (!trimmed) {
          params.delete(key);
        } else {
          params.set(key, trimmed);
        }
      });
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  return {
    pathname,
    searchParams,
    search,
    category,
    destination,
    replaceQuery,
  };
}
