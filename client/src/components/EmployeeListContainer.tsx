import { Flex, Heading } from "@chakra-ui/react";
import EmployeeList from "./EmployeeList";

const EmployeeListContainer = () => {
  return (
    <Flex direction="column">
      <Heading>Employees</Heading>
      <EmployeeList />
    </Flex>
  );
};

export default EmployeeListContainer;
