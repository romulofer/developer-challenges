import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import DataPage from "../app/pages/DataPage";
import { renderWithProviders, stubApi } from "./utils";
import { chartsFixture, machineFixture } from "./features/data/fixtures";

describe("DataPage", () => {
  it("fetches on mount and renders machine info and three chart cards", async () => {
    stubApi();
    renderWithProviders(<DataPage />);

    expect(await screen.findByText("Máquina 1023")).toBeInTheDocument();
    for (const name of ["Aceleração RMS", "Temperatura", "Velocidade RMS"]) {
      expect(screen.getByRole("region", { name })).toBeInTheDocument();
    }
  });

  it("fetches again on every mount", async () => {
    const fetchMock = stubApi();
    const first = renderWithProviders(<DataPage />);
    await screen.findByText("Máquina 1023");
    first.unmount();

    renderWithProviders(<DataPage />);
    await screen.findByText("Máquina 1023");

    const machineCalls = fetchMock.mock.calls.filter(([url]) =>
      String(url).endsWith("/machine"),
    );
    expect(machineCalls).toHaveLength(2);
  });

  it("keeps showing stale data while refetching", () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() => new Promise(() => {})),
    );
    const { store } = renderWithProviders(<DataPage />, {
      preloadedState: {
        data: {
          status: "succeeded",
          error: null,
          machine: machineFixture,
          charts: chartsFixture,
        },
      },
    });

    expect(store.getState().data.status).toBe("loading");
    expect(screen.getByText("Máquina 1023")).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: "Temperatura" }),
    ).toBeInTheDocument();
  });
});
