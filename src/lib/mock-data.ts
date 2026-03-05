export type DataPoint = {
  label: string;
  value: number;
};

export type Statistic = {
  id: string;
  title: string;
  description: string;
  category: string;
  country1?: string;
  country2?: string;
  dataPoints: DataPoint[];
  currentSum: number;
  currency: string;
};

export const statistics: Statistic[] = [
  {
    id: 'usa-iran-war-cost',
    title: 'Daily cost of war: USA vs Iran',
    description: 'Estimated daily cost for the US to conduct military operations against Iran. Based on current operational tempo.',
    category: 'War',
    country1: 'USA',
    country2: 'Iran',
    dataPoints: [
      { label: 'Day 1', value: 1.0 },
      { label: 'Day 2', value: 1.2 },
      { label: 'Day 3', value: 1.1 },
      { label: 'Day 4', value: 1.5 },
      { label: 'Day 5', value: 1.8 },
    ],
    currentSum: 1.8,
    currency: 'Billion USD/day',
  },
  {
    id: 'usa-national-debt',
    title: 'USA Gross National Debt',
    description: 'Total outstanding debt of the U.S. federal government. The debt is increasing by an average of $74,000 per second.',
    category: 'Debt',
    country1: 'USA',
    dataPoints: [
      { label: '2022', value: 30.93 },
      { label: '2023', value: 33.17 },
      { label: '2024', value: 34.21 },
      { label: '2025', value: 36.8 },
      { label: '2026', value: 38.56 },
    ],
    currentSum: 38.56,
    currency: 'Trillion USD',
  },
  {
    id: 'usa-china-debt',
    title: 'US Treasuries held by China',
    description: 'The amount of U.S. Treasury securities held by China, which has been decreasing recently.',
    category: 'Debt',
    country1: 'USA',
    country2: 'China',
    dataPoints: [
      { label: '2021', value: 1039 },
      { label: '2022', value: 867 },
      { label: '2023', value: 782 },
      { label: '2024', value: 805 },
      { label: '2025', value: 927.09 },
    ],
    currentSum: 927.09,
    currency: 'Billion USD',
  },
  {
    id: 'iran-military-spending',
    title: 'Military Spending: Iran',
    description: 'Annual military expenditure of Iran, equivalent to about $250 per second.',
    category: 'Military',
    country1: 'Iran',
    dataPoints: [
      { label: '2020', value: 6.8 },
      { label: '2021', value: 7.1 },
      { label: '2022', value: 7.4 },
      { label: '2023', value: 7.6 },
      { label: '2024', value: 7.89 },
    ],
    currentSum: 7.89,
    currency: 'Billion USD',
  },
   {
    id: 'crypto-market-cap',
    title: 'Crypto Market Cap Change (24h)',
    description: 'The change in total cryptocurrency market capitalization over the last 24 hours. A highly volatile metric.',
    category: 'Cryptocurrency',
    dataPoints: [
      { label: 'Hour-4', value: -50 },
      { label: 'Hour-3', value: 25 },
      { label: 'Hour-2', value: -80 },
      { label: 'Hour-1', value: 100 },
      { label: 'Now', value: 131.15 },
    ],
    currentSum: 131.15,
    currency: 'Billion USD',
  },
  {
    id: 'russia-military-spending',
    title: 'Military Spending: Russia',
    description: 'Annual military expenditure of the Russian Federation, according to SIPRI data and 2024 estimates.',
    category: 'Military',
    country1: 'Russia',
    dataPoints: [
      { label: '2019', value: 65.1 },
      { label: '2020', value: 61.7 },
      { label: '2021', value: 65.9 },
      { label: '2022', value: 86.4 },
      { label: '2023', value: 109 },
      { label: '2024', value: 120 },
    ],
    currentSum: 120,
    currency: 'Billion USD',
  },
  {
    id: 'india-poverty-rate',
    title: 'Multidimensional Poverty Rate: India',
    description: 'Percentage of the population living in multidimensional poverty, based on NITI Aayog reports.',
    category: 'Poverty',
    country1: 'India',
    dataPoints: [
      { label: '2019', value: 17.5 },
      { label: '2020', value: 16.2 },
      { label: '2021', value: 15.0 },
      { label: '2022', value: 12.8 },
      { label: '2023', value: 11.3 },
      { label: '2024', value: 9.8 },
    ],
    currentSum: 9.8,
    currency: '%',
  },
  {
    id: 'brazil-crime-rate',
    title: 'Homicide Rate: Brazil',
    description: 'Homicides per 100,000 inhabitants in Brazil, from the Brazilian Forum on Public Safety.',
    category: 'Crime',
    country1: 'Brazil',
    dataPoints: [
      { label: '2019', value: 21.7 },
      { label: '2020', value: 23.6 },
      { label: '2021', value: 22.4 },
      { label: '2022', value: 20.1 },
      { label: '2023', value: 19.4 },
      { label: '2024', value: 18.9 },
    ],
    currentSum: 18.9,
    currency: 'per 100k',
  },
  {
    id: 'somalia-corruption-index',
    title: 'Corruption Perception Index: Somalia',
    description: 'Corruption Perception Index score for Somalia by Transparency International. Lower score means higher perceived corruption.',
    category: 'Corruption',
    country1: 'Somalia',
    dataPoints: [
      { label: '2019', value: 9 },
      { label: '2020', value: 12 },
      { label: '2021', value: 13 },
      { label: '2022', value: 12 },
      { label: '2023', value: 11 },
      { label: '2024', value: 11 },
    ],
    currentSum: 11,
    currency: 'Score (0-100)',
  },
  {
    id: 'germany-gdp-growth',
    title: 'GDP Growth Rate: Germany',
    description: 'Annual percentage change in Gross Domestic Product, based on government and IMF forecasts.',
    category: 'Economy',
    country1: 'Germany',
    dataPoints: [
      { label: '2019', value: 1.1 },
      { label: '2020', value: -3.8 },
      { label: '2021', value: 3.2 },
      { label: '2022', value: 1.8 },
      { label: '2023', value: -0.3 },
      { label: '2024', value: 0.2 },
    ],
    currentSum: 0.2,
    currency: '%',
  },
  {
    id: 'ukraine-war-cost',
    title: 'Daily cost of war for Ukraine',
    description: 'Estimated daily cost for Ukraine to conduct military operations.',
    category: 'War',
    country1: 'Ukraine',
    dataPoints: [
      { label: '2022-Q1', value: 90 },
      { label: '2022-Q3', value: 110 },
      { label: '2023-Q1', value: 120 },
      { label: '2023-Q3', value: 135 },
      { label: '2024-Q1', value: 100 },
      { label: '2024-Q2', value: 115 },
    ],
    currentSum: 115,
    currency: 'Million USD/day',
  },
  {
    id: 'usa-deported-immigrants',
    title: 'Deported Immigrants from USA',
    description: 'Total number of immigrants deported from the USA. This number increases by approximately 1 person every 3 seconds.',
    category: 'Immigration',
    country1: 'USA',
    dataPoints: [
      { label: 'Step 1', value: 956998 },
      { label: 'Step 2', value: 956998 },
      { label: 'Step 3', value: 956999 },
      { label: 'Step 4', value: 956999 },
      { label: 'Step 5', value: 957000 },
    ],
    currentSum: 957000,
    currency: 'people',
  },
];
