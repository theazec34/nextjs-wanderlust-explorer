'use client';

import type { FormEvent } from 'react';

type SearchBarProps = {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

/** Controlled search bar with optional lightweight submit interception. */
export default function SearchBar({
  id,
  value,
  onChange,
  placeholder = 'Buscar por título…',
}: SearchBarProps) {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} role="search" className="w-full">
      <label htmlFor={id} className="sr-only">
        Buscar experiencias por título
      </label>
      <input
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm outline-none ring-accent/40 transition focus:border-accent focus:ring"
      />
    </form>
  );
}
