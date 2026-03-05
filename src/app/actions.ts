'use server';

import { statistics } from '@/lib/mock-data';

export async function fetchStatistics({
  page = 1,
  limit = 3,
  countries = [],
  categories = [],
}: {
  page?: number;
  limit?: number;
  countries?: string[];
  categories?: string[];
}) {
  // simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let filteredStats = statistics;

  if (countries.length > 0) {
    filteredStats = filteredStats.filter(
      (stat) =>
        (stat.country1 && countries.includes(stat.country1)) ||
        (stat.country2 && countries.includes(stat.country2))
    );
  }

  if (categories.length > 0) {
    filteredStats = filteredStats.filter((stat) =>
      categories.includes(stat.category)
    );
  }

  const offset = (page - 1) * limit;
  const data = filteredStats.slice(offset, offset + limit);

  return data;
}
