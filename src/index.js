import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/theme";
import { Provider } from "react-redux";
import { store } from "./features/index";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
