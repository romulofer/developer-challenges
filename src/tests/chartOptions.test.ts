import { describe, expect, it } from "vitest";
import type { SeriesLineOptions } from "highcharts";
import { chartsFixture } from "./features/data/fixtures";
import { buildChartOptions } from "../features/utils/chartOptions";

describe("buildChartOptions", () => {
  const series = chartsFixture.acceleration;
  const options = buildChartOptions(series, "Aceleração RMS (g)");
  const lines = options.series as SeriesLineOptions[];

  it("creates one line series per input series, in order", () => {
    expect(lines).toHaveLength(series.length);
    expect(lines.map((s) => s.name)).toEqual(series.map((s) => s.name));
  });

  it("passes the data through", () => {
    expect(lines[0].data).toEqual(series[0].data);
  });

  it("uses a datetime x axis with Portuguese month names", () => {
    expect(options.xAxis).toMatchObject({ type: "datetime", crosshair: true });
    expect(options.lang?.shortMonths?.[4]).toBe("Mai");
  });

  it("titles the y axis", () => {
    expect(options.yAxis).toMatchObject({
      title: { text: "Aceleração RMS (g)" },
    });
  });

  it("puts the legend at the bottom", () => {
    expect(options.legend).toMatchObject({ verticalAlign: "bottom" });
  });

  it("gives each axis a distinct color", () => {
    const colors = lines.map((s) => s.color);
    expect(new Set(colors).size).toBe(series.length);
  });
});
