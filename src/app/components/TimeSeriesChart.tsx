import { memo, useMemo } from "react";
import type { ChartSeries } from "../../features/data/types";
import { buildChartOptions } from "../../features/utils/chartOptions";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

type TimeSeriesChartProps = {
  series: ChartSeries[];
  yAxisTitle: string;
};

function TimeSeriesChart(props: TimeSeriesChartProps) {
  const { series, yAxisTitle } = props;
  const options = useMemo(
    () => buildChartOptions(series, yAxisTitle),
    [series, yAxisTitle],
  );

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default memo(TimeSeriesChart);
