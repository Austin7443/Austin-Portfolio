import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  colors: {
    primary: "red",
  },

  styles: {
    global: (props) => ({
      body: {
        fontFamily: "Trenda-regular",
      },
    }),
  },
});
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
