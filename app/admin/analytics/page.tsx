"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getApiUsageData, getContentStyleData } from "@/lib/mock-admin-data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  AreaChart,
  Area
} from "recharts";

export default function AnalyticsPage() {
  const apiData = getApiUsageData();
  const contentStyleData = getContentStyleData();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Advanced Analytics</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
            <CardHeader>
                <CardTitle>API Costs & Usage</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={apiData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" tickFormatter={(v) => `$${v}`} />
                            <Tooltip />
                            <Legend />
                            <Bar yAxisId="left" dataKey="calls" name="Calls" fill="#8884d8" />
                            <Bar yAxisId="right" dataKey="cost" name="Cost ($)" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Content Style Preferences</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={contentStyleData} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                            <XAxis type="number" hide />
                            <YAxis dataKey="name" type="category" width={100} tickLine={false} axisLine={false} />
                            <Tooltip />
                            <Bar dataKey="value" fill="#FFBB28" radius={[0, 4, 4, 0]} barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
      </div>

      <Card>
          <CardHeader>
              <CardTitle>System Load (Mock Real-time)</CardTitle>
          </CardHeader>
          <CardContent>
              <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={[
                        { name: '0:00', load: 30 },
                        { name: '1:00', load: 25 },
                        { name: '2:00', load: 20 },
                        { name: '3:00', load: 15 },
                        { name: '4:00', load: 15 },
                        { name: '5:00', load: 20 },
                        { name: '6:00', load: 35 },
                        { name: '7:00', load: 50 },
                        { name: '8:00', load: 70 },
                        { name: '9:00', load: 85 },
                        { name: '10:00', load: 90 },
                        { name: '11:00', load: 85 },
                        { name: '12:00', load: 80 },
                        { name: '13:00', load: 75 },
                        { name: '14:00', load: 80 },
                        { name: '15:00', load: 85 },
                        { name: '16:00', load: 90 },
                        { name: '17:00', load: 95 },
                        { name: '18:00', load: 80 },
                        { name: '19:00', load: 70 },
                        { name: '20:00', load: 60 },
                        { name: '21:00', load: 50 },
                        { name: '22:00', load: 40 },
                        { name: '23:00', load: 35 },
                      ]}>
                          <defs>
                              <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                              </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                          <YAxis fontSize={12} tickLine={false} axisLine={false} />
                          <Tooltip />
                          <Area type="monotone" dataKey="load" stroke="#8884d8" fillOpacity={1} fill="url(#colorLoad)" />
                      </AreaChart>
                  </ResponsiveContainer>
              </div>
          </CardContent>
      </Card>
    </div>
  );
}
