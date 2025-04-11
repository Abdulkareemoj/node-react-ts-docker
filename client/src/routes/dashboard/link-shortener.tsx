import DashboardLayout from "@/layouts/DashboardLayout";
import { createFileRoute } from "@tanstack/react-router";
import { PlusIcon, SearchIcon } from "lucide-react";
import { LinksTable } from "@/components/dashboard/LinksTable";
import { AreaChart } from "@/components/dashboard/AreaChart";
import { DatePickerWithRange } from "@/components/dashboard/DateRangePicker";
import { Card, CardContent } from "@/components/dashboard/Card";
import { Input } from "@/components/dashboard/Input";
import { Button } from "@/components/dashboard/Button";

export const Route = createFileRoute("/dashboard/link-shortener")({
  component: () => (
    <DashboardLayout>
      <div className="flex min-h-screen w-full flex-col bg-gray-50">
        <main className="flex-1 p-6 md:p-8">
          <div className="mx-auto  space-y-8">
            {/* Header */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h1 className="text-3xl font-bold">Hey, Daniel 👋</h1>
                <p className="text-gray-500">
                  Track your links with every details here
                </p>
              </div>
              <div className="flex items-center gap-2">
                <DatePickerWithRange />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-3xl font-bold">15,242</h3>
                    <p className="text-sm text-gray-500">Total Clicks</p>
                    <div className="flex items-center gap-1 text-sm text-emerald-500">
                      <span>+1,310</span>
                      <span className="text-xs">This week</span>
                    </div>
                  </div>
                  <div className="h-[100px] mt-2">
                    <AreaChart
                      data={[
                        10, 45, 32, 65, 45, 35, 55, 40, 60, 35, 15, 30, 55, 80,
                      ]}
                      color="#10b981"
                    />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-3xl font-bold">9,422</h3>
                    <p className="text-sm text-gray-500">Visitors</p>
                    <div className="flex items-center gap-1 text-sm text-rose-500">
                      <span>-150</span>
                      <span className="text-xs">This week</span>
                    </div>
                  </div>
                  <div className="h-[100px] mt-2">
                    <AreaChart
                      data={[
                        30, 60, 40, 70, 50, 75, 40, 60, 80, 60, 80, 70, 65, 75,
                      ]}
                      color="#f43f5e"
                    />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-3xl font-bold">+150</h3>
                    <p className="text-sm text-gray-500">Unused Link</p>
                    <div className="flex items-center gap-1 text-sm text-emerald-500">
                      <span>+10</span>
                      <span className="text-xs">This week</span>
                    </div>
                  </div>
                  <div className="h-[100px] mt-2">
                    <AreaChart
                      data={[
                        40, 70, 55, 40, 30, 35, 25, 30, 55, 60, 45, 35, 55, 80,
                      ]}
                      color="#10b981"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Links Table */}
            <div className="space-y-4">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-2xl font-bold">My Links</h2>
                  <p className="text-sm text-gray-500">21 total link</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <Input
                      className="pl-10 w-full md:w-[300px]"
                      placeholder="Search link"
                      type="search"
                      // value={searchQuery}
                      // onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button variant="outline" className="gap-2">
                    <PlusIcon className="h-4 w-4" />
                    <span>New Link</span>
                  </Button>
                </div>
              </div>
              <LinksTable
              // searchQuery={searchQuery}
              />
            </div>
          </div>
        </main>
      </div>
    </DashboardLayout>
  ),
});
