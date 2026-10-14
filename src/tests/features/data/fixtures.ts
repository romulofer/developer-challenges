import type { ChartData, MachineDto } from "../../../features/data/types";

export const machineFixture: MachineDto = {
  name: "Máquina 1023",
  point: "Ponto 20192",
  sampleRate: 200,
  interval: "20 min",
  range: "16g",
};

export const chartsFixture: ChartData = {
  acceleration: [
    {
      name: "Axial",
      data: [
        [1, 0.1],
        [2, 0.2],
      ],
    },
    {
      name: "Horizontal",
      data: [
        [1, 0.1],
        [2, 0.2],
      ],
    },
    {
      name: "Radial",
      data: [
        [1, 0.1],
        [2, 0.2],
      ],
    },
  ],
  velocity: [
    {
      name: "Axial",
      data: [
        [1, 0.1],
        [2, 0.2],
      ],
    },
    {
      name: "Horizontal",
      data: [
        [1, 0.1],
        [2, 0.2],
      ],
    },
    {
      name: "Radial",
      data: [
        [1, 0.1],
        [2, 0.2],
      ],
    },
  ],
  temperature: [
    {
      name: "Temperatura",
      data: [
        [1, 20],
        [2, 21],
      ],
    },
  ],
};
