import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MoralisProvider } from "react-moralis";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const APP_ID = "Ra5TzI8AtWDIYG7k88juzx3zhEr6YZ8ghVUx8F34";
const SERVER_URL = "https://yi52hrws3oqw.usemoralis.com:2053/server";

root.render(
  <StrictMode>
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <App />
    </MoralisProvider>
  </StrictMode>
);
