import { Box, Container, Typography } from "@mui/material";
import type { MetricKey } from "../../features/data/types";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  fetchDataRequested,
  selectCharts,
  selectMachine,
} from "../../features/data/dataSlice";
import { useEffect } from "react";
import MachineInfoBar from "../components/MachineInfoBar";
import ChartCard from "../components/ChartCard";
import TimeSeriesChart from "../components/TimeSeriesChart";

type ChartConfig = {
  metric: MetricKey;
  title: string;
  yAxisTitle: string;
};

const CHARTS: ChartConfig[] = [
  {
    metric: "acceleration",
    title: "Aceleração RMS",
    yAxisTitle: "Aceleração RMS (g)",
  },
  {
    metric: "temperature",
    title: "Temperatura",
    yAxisTitle: "Temperatura (°C)",
  },
  {
    metric: "velocity",
    title: "Velocidade RMS",
    yAxisTitle: "Velocidade RMS (mm/s)",
  },
];

function DataPage() {
  const dispatch = useAppDispatch();
  const machine = useAppSelector(selectMachine);
  const charts = useAppSelector(selectCharts);

  useEffect(() => {
    dispatch(fetchDataRequested());
  }, [dispatch]);
  return (
    <>
      <Box component="header" sx={styles.header}>
        <Typography variant="h6" component="h1">
          Análise de Dados
        </Typography>
      </Box>
      <Container component="main" maxWidth={false} sx={styles.main}>
        {machine && <MachineInfoBar machine={machine} />}
        {charts && (
          <Box sx={styles.panel}>
            {CHARTS.map(({ metric, title, yAxisTitle }) => (
              <ChartCard key={metric} title={title}>
                <TimeSeriesChart
                  series={charts[metric]}
                  yAxisTitle={yAxisTitle}
                />
              </ChartCard>
            ))}
          </Box>
        )}
      </Container>
    </>
  );
}

export default DataPage;

const styles = {
  header: {
    bgcolor: "background.paper",
    borderBottom: 1,
    borderColor: "divider",
    px: { xs: 2, md: 3 },
    py: 2,
  },
  main: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    py: 2,
    px: { xs: 2, md: 3 },
  },
  panel: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    p: 2,
    bgcolor: "background.default",
    border: 1,
    borderColor: "divider",
    borderRadius: 1,
  },
};
