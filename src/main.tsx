import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BarcodeScanner from "./BarcodeScanner";
import "./index.css";

/* eslint-disable  @typescript-eslint/no-non-null-assertion */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BarcodeScanner />
  </StrictMode>,
);
