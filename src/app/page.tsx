'use client';
import { useState } from 'react';
import { Header } from '@/components/header';
import { StatisticsList } from '@/components/statistics-list';

export default function Home() {
  const [filters, setFilters] = useState<{
    countries: string[];
    categories: string[];
  }>({ countries: [], categories: [] });

  return (
    <div>
      <Header filters={filters} setFilters={setFilters} />
      <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <p className="text-center mb-8 max-w-2xl mx-auto text-muted-foreground md:text-xl">
          Tracking global problems with real-time data visualizations.
        </p>
        <StatisticsList filters={filters} />
      </main>
    </div>
  );
}
