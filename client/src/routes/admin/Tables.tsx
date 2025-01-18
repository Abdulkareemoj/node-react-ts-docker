import Breadcrumb from "@/components/admin/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/admin/Tables/TableOne";
import TableThree from "@/components/admin/Tables/TableThree";
import TableTwo from "@/components/admin/Tables/TableTwo";
import AdminLayout from "@/layouts/AdminLayout";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/Tables")({
  component: Tables,
});
function Tables() {
  return (
    <AdminLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </AdminLayout>
  );
}
