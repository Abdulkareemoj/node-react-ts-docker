import { createFileRoute } from "@tanstack/react-router";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  BarChartIcon as ChartSpline,
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  MousePointer,
  Calendar,
  Download,
} from "lucide-react";
import AdminLayout from "@/components/layout/AdminLayout";

export const Route = createFileRoute("/admin/analytics")({
  component: AdminAnalytics,
});

function AdminAnalytics() {
  // Sample data for analytics
  const trafficData = [
    { month: "Jan", visitors: 4000, pageViews: 12000, bounceRate: 45 },
    { month: "Feb", visitors: 3000, pageViews: 9000, bounceRate: 42 },
    { month: "Mar", visitors: 5000, pageViews: 15000, bounceRate: 38 },
    { month: "Apr", visitors: 4500, pageViews: 13500, bounceRate: 40 },
    { month: "May", visitors: 6000, pageViews: 18000, bounceRate: 35 },
    { month: "Jun", visitors: 5500, pageViews: 16500, bounceRate: 37 },
  ];

  const contentPerformance = [
    {
      title: "Getting Started with React",
      views: 15420,
      shares: 234,
      comments: 89,
    },
    {
      title: "Advanced TypeScript Patterns",
      views: 12340,
      shares: 189,
      comments: 67,
    },
    { title: "Building Scalable APIs", views: 9870, shares: 156, comments: 45 },
    {
      title: "UI/UX Design Principles",
      views: 8760,
      shares: 134,
      comments: 38,
    },
    { title: "Database Optimization", views: 7650, shares: 112, comments: 29 },
  ];

  const deviceData = [
    { name: "Desktop", value: 45, color: "#8884d8" },
    { name: "Mobile", value: 35, color: "#82ca9d" },
    { name: "Tablet", value: 20, color: "#ffc658" },
  ];

  const conversionData = [
    { week: "Week 1", conversions: 120, revenue: 2400 },
    { week: "Week 2", conversions: 150, revenue: 3000 },
    { week: "Week 3", conversions: 180, revenue: 3600 },
    { week: "Week 4", conversions: 200, revenue: 4000 },
  ];

  const [timeRange, setTimeRange] = useState("30d");

  const totalVisitors = trafficData.reduce(
    (sum, item) => sum + item.visitors,
    0
  );
  const totalPageViews = trafficData.reduce(
    (sum, item) => sum + item.pageViews,
    0
  );
  const avgBounceRate = Math.round(
    trafficData.reduce((sum, item) => sum + item.bounceRate, 0) /
      trafficData.length
  );

  return (
    <AdminLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
            <p className="text-muted-foreground">
              Detailed insights into your website performance and user behavior
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Visitors
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {totalVisitors.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12.5%
                </span>
                from last period
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Page Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {totalPageViews.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +8.2%
                </span>
                from last period
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
              <MousePointer className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{avgBounceRate}%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600 flex items-center">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  -2.1%
                </span>
                from last period
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg. Session
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3m 24s</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +15.3%
                </span>
                from last period
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="traffic" className="space-y-4">
          <TabsList>
            <TabsTrigger value="traffic">Traffic Analytics</TabsTrigger>
            <TabsTrigger value="content">Content Performance</TabsTrigger>
            <TabsTrigger value="audience">Audience Insights</TabsTrigger>
            <TabsTrigger value="conversions">Conversions</TabsTrigger>
          </TabsList>

          <TabsContent value="traffic" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Visitor Trends</CardTitle>
                  <CardDescription>
                    Monthly visitor growth over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      visitors: {
                        label: "Visitors",
                        color: "hsl(var(--chart-1))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={trafficData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area
                          type="monotone"
                          dataKey="visitors"
                          stroke="var(--color-visitors)"
                          fill="var(--color-visitors)"
                          fillOpacity={0.3}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Page Views vs Bounce Rate</CardTitle>
                  <CardDescription>
                    Correlation between engagement metrics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      pageViews: {
                        label: "Page Views",
                        color: "hsl(var(--chart-1))",
                      },
                      bounceRate: {
                        label: "Bounce Rate",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={trafficData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Bar
                          yAxisId="left"
                          dataKey="pageViews"
                          fill="var(--color-pageViews)"
                        />
                        <Line
                          yAxisId="right"
                          type="monotone"
                          dataKey="bounceRate"
                          stroke="var(--color-bounceRate)"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Content</CardTitle>
                <CardDescription>
                  Your most popular blog posts and pages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contentPerformance.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium">{item.title}</h4>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {item.views.toLocaleString()} views
                          </span>
                          <span>{item.shares} shares</span>
                          <span>{item.comments} comments</span>
                        </div>
                      </div>
                      <Badge variant="outline">#{index + 1}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="audience" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Device Usage</CardTitle>
                  <CardDescription>
                    How users access your content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      desktop: {
                        label: "Desktop",
                        color: "#8884d8",
                      },
                      mobile: {
                        label: "Mobile",
                        color: "#82ca9d",
                      },
                      tablet: {
                        label: "Tablet",
                        color: "#ffc658",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={deviceData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) =>
                            `${name} ${(percent * 100).toFixed(0)}%`
                          }
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {deviceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Geographic Distribution</CardTitle>
                  <CardDescription>
                    Top countries by visitor count
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        country: "United States",
                        visitors: 12450,
                        percentage: 35,
                      },
                      {
                        country: "United Kingdom",
                        visitors: 8920,
                        percentage: 25,
                      },
                      { country: "Germany", visitors: 6780, percentage: 19 },
                      { country: "Canada", visitors: 4560, percentage: 13 },
                      { country: "Australia", visitors: 2890, percentage: 8 },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-6 bg-muted rounded"></div>
                          <span className="font-medium">{item.country}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">
                            {item.visitors.toLocaleString()}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {item.percentage}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="conversions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Conversion Trends</CardTitle>
                <CardDescription>
                  Weekly conversion rates and revenue
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    conversions: {
                      label: "Conversions",
                      color: "hsl(var(--chart-1))",
                    },
                    revenue: {
                      label: "Revenue",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-[400px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={conversionData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="week" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar
                        yAxisId="left"
                        dataKey="conversions"
                        fill="var(--color-conversions)"
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="revenue"
                        stroke="var(--color-revenue)"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}
