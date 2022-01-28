import { Flex } from "@chakra-ui/react";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = () => {
  return (
    <Flex w="100%" justifyContent="space-around" flexWrap="wrap">
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
    </Flex>
  );
};

export default EmployeeList;
