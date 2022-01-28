import { ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import EmployeeListContainer from "./components/EmployeeListContainer";

export const App = () => (
  <ChakraProvider theme={theme}>
    <EmployeeListContainer />
  </ChakraProvider>
);
