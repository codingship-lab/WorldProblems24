'use client';

import { statistics } from '@/lib/mock-data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

type FilterType = {
  countries: string[];
  categories: string[];
};

type FiltersProps = {
  filters: FilterType;
  setFilters: React.Dispatch<React.SetStateAction<FilterType>>;
};

const allCountries = [
  ...new Set(
    statistics.flatMap((s) => [s.country1, s.country2]).filter(Boolean) as string[]
  ),
].sort();

const allCategories = [
  ...new Set(statistics.map((s) => s.category)),
].sort();


export function Filters({ filters, setFilters }: FiltersProps) {

  const handleCountryChange = (country: string) => {
    setFilters((prev) => {
      const newCountries = prev.countries.includes(country)
        ? prev.countries.filter((c) => c !== country)
        : [...prev.countries, country];
      return { ...prev, countries: newCountries };
    });
  };

  const handleCategoryChange = (category: string) => {
    setFilters((prev) => {
      const newCategories = prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category];
      return { ...prev, categories: newCategories };
    });
  };


  return (
    <div className="py-4">
      <Accordion type="multiple" defaultValue={['countries', 'categories']} className="w-full">
        <AccordionItem value="countries">
          <AccordionTrigger>Countries</AccordionTrigger>
          <AccordionContent className="space-y-2">
            {allCountries.map((country) => (
              <div key={country} className="flex items-center space-x-2">
                <Checkbox
                  id={`country-${country}`}
                  checked={filters.countries.includes(country)}
                  onCheckedChange={() => handleCountryChange(country)}
                />
                <Label htmlFor={`country-${country}`} className="font-normal">
                  {country}
                </Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="categories">
          <AccordionTrigger>Problems</AccordionTrigger>
          <AccordionContent className="space-y-2">
             {allCategories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category}`}
                  checked={filters.categories.includes(category)}
                  onCheckedChange={() => handleCategoryChange(category)}
                />
                <Label htmlFor={`category-${category}`} className="font-normal">
                  {category}
                </Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
