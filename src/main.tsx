import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import "keen-slider/keen-slider.min.css";

import theme from "./theme/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
