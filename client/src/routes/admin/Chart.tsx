import Breadcrumb from "@/components/admin/Breadcrumbs/Breadcrumb";
import ChartOne from "@/components/admin/Charts/ChartOne";
import ChartThree from "@/components/admin/Charts/ChartThree";
import ChartTwo from "@/components/admin/Charts/ChartTwo";
import AdminLayout from "@/layouts/AdminLayout";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/Chart")({
  component: Chart,
});
function Chart() {
  return (
    <AdminLayout>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </AdminLayout>
  );
}

export default Chart;
