"use client";

import ThemeProvider from "./provider";
import { theme } from "../styles/theme";
import { GlobalStyles } from "../styles/global.styles";


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body suppressHydrationWarning={true}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
