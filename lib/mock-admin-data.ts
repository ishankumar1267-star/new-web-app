import { startOfMonth, subMonths, format, eachDayOfInterval, subDays } from "date-fns";

export interface AdminStats {
  totalUsers: number;
  newSignupsToday: number;
  activeUsers: number;
  totalGeneratedContent: number;
  totalRevenue: number;
  mrr: number;
  apiCallsToday: number;
  userGrowth: number; // percentage
  revenueGrowth: number; // percentage
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  signupDate: string;
  lastLogin: string;
  plan: 'Free' | 'Pro' | 'Enterprise';
  totalGenerations: number;
  status: 'Active' | 'Blocked';
  country: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  value2?: number; // For comparison charts
  [key: string]: string | number | undefined; // Allow arbitrary keys for charts
}

// Generate Mock Admin Stats
export const getAdminStats = (): AdminStats => {
  return {
    totalUsers: 12450,
    newSignupsToday: 142,
    activeUsers: 8500,
    totalGeneratedContent: 154000,
    totalRevenue: 450000,
    mrr: 24500,
    apiCallsToday: 4520,
    userGrowth: 12.5,
    revenueGrowth: 8.2,
  };
};

// Generate Mock User Growth Data (Last 30 Days)
export const getUserGrowthData = (): ChartDataPoint[] => {
  const end = new Date();
  const start = subDays(end, 30);
  const days = eachDayOfInterval({ start, end });

  return days.map(day => ({
    name: format(day, 'MMM dd'),
    value: Math.floor(Math.random() * 100) + 50, // New users
    value2: Math.floor(Math.random() * 800) + 1000, // Total users trend (simplified)
  }));
};

// Generate Revenue Data (Last 6 Months)
export const getRevenueData = (): ChartDataPoint[] => {
  const end = new Date();
  const start = subMonths(end, 6);
  // Just take month starts
  const months = [];
  for (let i = 5; i >= 0; i--) {
      months.push(subMonths(end, i));
  }

  return months.map(date => ({
    name: format(date, 'MMM yyyy'),
    value: Math.floor(Math.random() * 5000) + 20000, // Subscriptions
    value2: Math.floor(Math.random() * 1000) + 500,   // One-time
  }));
};

// Generate Platform Usage Data
export const getPlatformUsageData = (): ChartDataPoint[] => [
  { name: 'Instagram Reels', value: 45 },
  { name: 'YouTube Shorts', value: 35 },
  { name: 'TikTok', value: 20 },
];

// Generate Content Style Usage
export const getContentStyleData = (): ChartDataPoint[] => [
  { name: 'Storytelling', value: 40 },
  { name: 'Educational', value: 30 },
  { name: 'Motivational', value: 20 },
  { name: 'Faceless', value: 10 },
];

// Generate Mock Users List
export const getUsersList = (count: number = 20): UserData[] => {
  const users: UserData[] = [];
  const statuses: ('Active' | 'Blocked')[] = ['Active', 'Active', 'Active', 'Blocked'];
  const plans: ('Free' | 'Pro' | 'Enterprise')[] = ['Free', 'Free', 'Pro', 'Pro', 'Enterprise'];

  for (let i = 0; i < count; i++) {
    users.push({
      id: `USR-${1000 + i}`,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      signupDate: format(subDays(new Date(), Math.floor(Math.random() * 365)), 'yyyy-MM-dd'),
      lastLogin: format(subDays(new Date(), Math.floor(Math.random() * 30)), 'yyyy-MM-dd HH:mm'),
      plan: plans[Math.floor(Math.random() * plans.length)],
      totalGenerations: Math.floor(Math.random() * 500),
      status: statuses[Math.floor(Math.random() * statuses.length)],
      country: ['USA', 'India', 'UK', 'Canada', 'Germany'][Math.floor(Math.random() * 5)],
    });
  }
  return users;
};

// Mock API Usage Data
export const getApiUsageData = () => {
    return [
        { name: 'OpenAI', calls: 2500, cost: 45.20, errors: 12 },
        { name: 'Google Gemini', calls: 1800, cost: 12.50, errors: 5 },
        { name: 'ElevenLabs', calls: 800, cost: 28.00, errors: 2 },
    ];
};
