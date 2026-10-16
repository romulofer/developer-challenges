import type { ChartSeries } from "../data/types";
import type { Options } from "highcharts";

const SERIES_COLORS: Record<ChartSeries["name"], string> = {
  Axial: "#2084c8",
  Horizontal: "#cc307c",
  Radial: "#b48800",
  Temperatura: "#88982c",
};

const SHORT_MONTHS_PT = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

export function buildChartOptions(
  series: ChartSeries[],
  yAxisTitle: string,
): Options {
  return {
    chart: {
      type: "line",
      height: 320,
      animation: false,
      style: { fontFamily: "inherit" },
    },
    title: {
      text: undefined,
    },
    credits: { enabled: false },
    lang: { shortMonths: SHORT_MONTHS_PT },
    xAxis: {
      type: "datetime",
      crosshair: true,
      labels: { format: "{value:%e. %b}" },
    },
    yAxis: { title: { text: yAxisTitle } },
    legend: { align: "center", verticalAlign: "bottom" },
    tooltip: { shared: true, xDateFormat: "%e. %b %Y, %H:%M" },
    plotOptions: {
      series: {
        animation: false,
        lineWidth: 2,
        marker: { enabled: false },
      },
    },
    series: series.map((s) => ({
      type: "line",
      name: s.name,
      data: s.data,
      color: SERIES_COLORS[s.name],
    })),
  };
}
