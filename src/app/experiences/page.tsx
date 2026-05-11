import { Suspense } from 'react';
import ExperiencesView from '@/components/ExperiencesView';

export default function ExperiencesPage() {
  return (
    <Suspense
      fallback={
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-600">
          Preparando el explorador…
        </div>
      }
    >
      <ExperiencesView />
    </Suspense>
  );
}
