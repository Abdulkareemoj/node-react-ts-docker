import Breadcrumb from "../../components/shortener/Breadcrumbs/Breadcrumb";
import TableOne from "../../components/shortener/Tables/TableOne";
import TableThree from "../../components/shortener/Tables/TableThree";
import TableTwo from "../../components/shortener/Tables/TableTwo";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shortener/Tables")({
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
