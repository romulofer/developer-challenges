import type { MachineDto, SeriesDto } from "./types";

async function getJson<T>(path: string): Promise<T> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}${path}`);
  if (!res.ok) throw new Error(`Request failed: ${res.status} ${path}`);
  return res.json() as Promise<T>;
}

export const fetchMachine = () => getJson<MachineDto>("/machine");
export const fetchSeries = () => getJson<SeriesDto[]>("/series");
