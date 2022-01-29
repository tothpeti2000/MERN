import { Flex, Image, Text } from "@chakra-ui/react";
import Employee from "../interfaces/Employee";

const EmployeeCard = (props: Employee) => {
  return (
    <Flex direction="column" p={5} boxShadow="dark-lg" borderRadius="lg">
      <Image src="https://i.pravatar.cc/300" />
      <Text>Name: {props.name}</Text>
      <Text>Age: {props.age}</Text>
      <Text>Position: {props.position}</Text>
    </Flex>
  );
};

export default EmployeeCard;
