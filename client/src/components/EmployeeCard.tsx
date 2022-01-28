import { Flex, Image, Text } from "@chakra-ui/react";

const EmployeeCard = () => {
  return (
    <Flex direction="column" p={5} boxShadow="dark-lg" borderRadius="lg">
      <Image src="https://i.pravatar.cc/300" />
      <Text>Name: John Cooper</Text>
      <Text>Age: 45</Text>
      <Text>Position: Web developer</Text>
    </Flex>
  );
};

export default EmployeeCard;
