'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { Filters } from './filters';

type FilterType = {
  countries: string[];
  categories: string[];
};

type HeaderProps = {
  filters: FilterType;
  setFilters: React.Dispatch<React.SetStateAction<FilterType>>;
};

export function Header({ filters, setFilters }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm">
      <h1 className="text-2xl font-black tracking-tighter sm:text-3xl">
        WorldProblems24
      </h1>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          <Filters filters={filters} setFilters={setFilters} />
        </SheetContent>
      </Sheet>
    </header>
  );
}
