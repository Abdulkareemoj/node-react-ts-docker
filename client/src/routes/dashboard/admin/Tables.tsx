import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/dashboard/Tables/TableOne";
import TableThree from "@/components/dashboard/Tables/TableThree";
import TableTwo from "@/components/dashboard/Tables/TableTwo";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/admin/Tables")({
  component: Tables,
});
function Tables() {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </>
  );
}
