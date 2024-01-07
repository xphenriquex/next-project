"use client";

import { ThemeProvider as NextThemesProvider } from "styled-components";
import StyledComponentsRegistry from "./lib/registry";

const ThemeProvider = ({ children, ...props }) => {
  return (
    <StyledComponentsRegistry>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </StyledComponentsRegistry>
  );
};

export default ThemeProvider;
