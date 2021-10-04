type Admin = {
  name: string;
  privilages: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

interface Admin2 {
  name: string;
  privilages: string[];
}

interface Employee2 {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee2 extends Employee2, Admin2 {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privilages: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
