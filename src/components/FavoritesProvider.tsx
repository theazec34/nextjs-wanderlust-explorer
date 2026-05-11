'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type FavoriteControls = {
  favoriteIds: number[];
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

const FavoriteContext = createContext<FavoriteControls | null>(null);

/** Holds favorites in React state only (no localStorage per challenge scope). */
export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const toggleFavorite = useCallback((id: number) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }, []);

  const isFavorite = useCallback(
    (id: number) => favoriteIds.includes(id),
    [favoriteIds],
  );

  const value = useMemo<FavoriteControls>(
    () => ({ favoriteIds, toggleFavorite, isFavorite }),
    [favoriteIds, toggleFavorite, isFavorite],
  );

  return (
    <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
  );
}

export function useFavoriteControls(): FavoriteControls {
  const ctx = useContext(FavoriteContext);
  if (!ctx) {
    throw new Error('useFavoriteControls must be used within FavoritesProvider');
  }
  return ctx;
}
