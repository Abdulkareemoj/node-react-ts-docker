import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import ChartOne from "@/components/dashboard/Charts/ChartOne";
import ChartThree from "@/components/dashboard/Charts/ChartThree";
import ChartTwo from "@/components/dashboard/Charts/ChartTwo";
import DashboardLayout from "@/layouts/DashboardLayout";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/Chart")({
  component: Chart,
});
function Chart() {
  return (
    <DashboardLayout>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </DashboardLayout>
  );
}

export default Chart;
