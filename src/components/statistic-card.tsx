'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Statistic, DataPoint } from '@/lib/mock-data';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useMemo, useState, useEffect } from 'react';
import { CountryFlag } from './country-flag';

const chartConfig = {
  value: {
    label: 'Value',
    color: 'hsl(var(--accent))',
  },
} satisfies ChartConfig;

export function StatisticCard({ statistic }: { statistic: Statistic }) {
  const [data, setData] = useState<DataPoint[]>(statistic.dataPoints);
  const [currentValue, setCurrentValue] = useState<number>(statistic.currentSum);

  useEffect(() => {
    setData(statistic.dataPoints);
    setCurrentValue(statistic.currentSum);

    const interval = setInterval(() => {
      setData((prevData) => {
        if (prevData.length === 0) {
          return prevData;
        }
        const lastPoint = prevData[prevData.length - 1];

        let newLabel = lastPoint.label;
        const match = lastPoint.label.match(/^(.*?)(\d+)$/);
        
        if (match && !/^\d{4}$/.test(lastPoint.label)) {
          const prefix = match[1];
          const num = parseInt(match[2], 10);
          newLabel = `${prefix}${num + 1}`;
        } else {
          return prevData;
        }

        let newValue: number;
        if (statistic.id === 'usa-deported-immigrants') {
            // +1 every 3 seconds -> +2/3 every 2 seconds (the interval)
            newValue = lastPoint.value + (2/3);
        } else {
            const fluctuation = (Math.random() - 0.45) * 0.1;
            newValue = lastPoint.value * (1 + fluctuation);

            if (statistic.currency === '%') {
              newValue = Math.max(0, Math.min(100, newValue));
            } else if (statistic.id !== 'crypto-market-cap') {
              newValue = Math.max(0, newValue);
            }
        }
        
        const newPoint: DataPoint = {
          label: newLabel,
          value: newValue,
        };

        setCurrentValue(newPoint.value);
        
        const newData = [...prevData.slice(1), newPoint];
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [statistic]);


  const trend = useMemo(() => {
    if (data.length < 2) return null;
    const last = data[data.length - 1].value;
    const secondLast = data[data.length - 2].value;
    if (last > secondLast) return 'up';
    if (last < secondLast) return 'down';
    return 'stable';
  }, [data]);

  const TrendIcon = () => {
    if (trend === 'up') return <span>▲</span>;
    if (trend === 'down') return <span>▼</span>;
    return <span>▬</span>;
  };

  return (
    <Card className="border-2 border-border bg-card">
      <CardHeader className="p-4">
        <CardTitle className="text-xl font-bold font-headline">{statistic.title}</CardTitle>
        <CardDescription>{statistic.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <ChartContainer config={chartConfig} className="w-full h-48 sm:h-60">
          <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
            <XAxis dataKey="label" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => (typeof value === 'number' ? value.toLocaleString() : value)}
              domain={['auto', 'auto']}
            />
            <Tooltip
              cursor={{ stroke: 'hsl(var(--accent))', strokeWidth: 2, strokeDasharray: '3 3' }}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Line
              animationDuration={1500}
              type="monotone"
              dataKey="value"
              stroke="hsl(var(--accent))"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: 'hsl(var(--accent))',
                stroke: 'hsl(var(--background))',
                strokeWidth: 2,
              }}
              activeDot={{
                r: 6,
                fill: 'hsl(var(--accent))',
                stroke: 'hsl(var(--background))',
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 pt-0">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {statistic.country1 && (
            <div className="flex items-center gap-2">
              <CountryFlag country={statistic.country1} className="h-4 w-6 rounded-sm" />
              <span className="text-sm font-medium">{statistic.country1}</span>
            </div>
          )}
          {statistic.country2 && (
            <>
              <span className="text-muted-foreground">vs</span>
              <div className="flex items-center gap-2">
                <CountryFlag country={statistic.country2} className="h-4 w-6 rounded-sm" />
                <span className="text-sm font-medium">{statistic.country2}</span>
              </div>
            </>
          )}
        </div>
        <div className="flex-grow text-center sm:text-right">
          <p className="text-2xl font-black font-mono flex items-center justify-end gap-2">
            <TrendIcon />
            {statistic.id === 'usa-deported-immigrants'
              ? Math.floor(currentValue).toLocaleString()
              : currentValue.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2})}
            <span className="text-base font-sans text-muted-foreground">{statistic.currency}</span>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
