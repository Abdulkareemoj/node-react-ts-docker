import Breadcrumb from "../../components/shortener/Breadcrumbs/Breadcrumb";
import ChartOne from "../../components/shortener/Charts/ChartOne";
import ChartThree from "../../components/shortener/Charts/ChartThree";
import ChartTwo from "../../components/shortener/Charts/ChartTwo";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Dashboard/Chart")({
  component: Chart,
});
function Chart() {
  return (
    <>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </>
  );
}

export default Chart;
