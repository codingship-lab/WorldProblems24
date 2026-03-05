'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { fetchStatistics } from '@/app/actions';
import type { Statistic } from '@/lib/mock-data';
import { StatisticCard } from './statistic-card';
import { Skeleton } from './ui/skeleton';

function StatisticSkeleton() {
  return (
    <div className="flex flex-col space-y-3 p-4 border rounded-lg bg-card">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-48 w-full" />
      <div className="flex justify-between items-center pt-2">
        <Skeleton className="h-8 w-1/4" />
        <Skeleton className="h-10 w-1/3" />
      </div>
    </div>
  );
}

type Filters = {
  countries: string[];
  categories: string[];
};

export function StatisticsList({ filters }: { filters: Filters }) {
  const [stats, setStats] = useState<Statistic[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const loadMoreStats = useCallback(async (reset = false) => {
    if (isLoading || (!hasMore && !reset)) return;
    setIsLoading(true);

    const nextPage = reset ? 1 : page + 1;
    const newStats = await fetchStatistics({ 
      page: nextPage, 
      limit: 3, 
      countries: filters.countries, 
      categories: filters.categories 
    });

    if (newStats.length > 0) {
      setPage(nextPage);
      setStats((prev) => (reset ? newStats : [...prev, ...newStats]));
      if(newStats.length < 3) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    } else {
      setHasMore(false);
      if (reset) {
        setStats([]);
      }
    }
    setIsLoading(false);
  }, [page, hasMore, isLoading, filters]);

  useEffect(() => {
    // Reset and load stats when filters change
    loadMoreStats(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMoreStats();
        }
      },
      { threshold: 1.0 }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [loadMoreStats, hasMore, isLoading]);

  return (
    <div className="space-y-8">
      {stats.map((statistic) => (
        <StatisticCard key={statistic.id} statistic={statistic} />
      ))}
      {isLoading && (
        <>
          <StatisticSkeleton />
          <StatisticSkeleton />
          <StatisticSkeleton />
        </>
      )}
      <div ref={loaderRef} className="h-1" />
      {!hasMore && stats.length > 0 && (
        <p className="text-center text-muted-foreground">You've reached the end.</p>
      )}
      {!isLoading && !hasMore && stats.length === 0 && (
        <p className="text-center text-muted-foreground">No results found.</p>
      )}
    </div>
  );
}
