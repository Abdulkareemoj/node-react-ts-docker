import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/dashboard/Tables/TableOne";
import TableThree from "@/components/dashboard/Tables/TableThree";
import TableTwo from "@/components/dashboard/Tables/TableTwo";
import DashboardLayout from "@/layouts/DashboardLayout";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/Tables")({
  component: Tables,
});
function Tables() {
  return (
    <DashboardLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </DashboardLayout>
  );
}
