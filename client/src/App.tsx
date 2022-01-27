import { ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import EmployeeList from "./components/EmployeeList";

export const App = () => (
  <ChakraProvider theme={theme}>
    <EmployeeList />
  </ChakraProvider>
);
