import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Employee from "../interfaces/Employee";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const FetchEmployees = async () => {
    const response = await fetch("http://localhost:5000/employees");
    const data = await response.json();

    return data;
  };

  const GetData = async () => {
    const employees = await FetchEmployees();
    setEmployees(employees);
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <Flex w="100%" justifyContent="space-around" flexWrap="wrap">
      {employees.map((employee) => {
        return (
          <EmployeeCard
            name={employee.name}
            age={employee.age}
            position={employee.position}
          />
        );
      })}
    </Flex>
  );
};

export default EmployeeList;
