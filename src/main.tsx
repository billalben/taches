import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import AppRouter from "./routes/AppRouter.tsx";
import { ThemeProvider } from "@mui/material";
import theme from "@/config/materialUi.ts";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </StrictMode>
);
