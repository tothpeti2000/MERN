import { Flex, Heading } from "@chakra-ui/react";
import EmployeeList from "./EmployeeList";

const EmployeeListContainer = () => {
  return (
    <Flex direction="column" alignItems="center" m={2}>
      <Heading mb={10}>Employees</Heading>
      <EmployeeList />
    </Flex>
  );
};

export default EmployeeListContainer;
