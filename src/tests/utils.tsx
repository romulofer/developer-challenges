import type { ReactElement } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { setupStore } from "../app/store";
import type { RootState } from "../app/store";
import { theme } from "../app/theme";

type Options = {
  preloadedState?: Partial<RootState>;
  route?: string;
};

export function renderWithProviders(
  ui: ReactElement,
  { preloadedState, route = "/" }: Options = {},
) {
  const store = setupStore(preloadedState);
  return {
    store,
    ...render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
        </ThemeProvider>
      </Provider>,
    ),
  };
}
