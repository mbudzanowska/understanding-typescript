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

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    // this is a type guard!
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privilages" in emp) {
    //interfaces and types are not available at runtime
    console.log("Privilages: " + emp.privilages);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo... " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ("loadCargo" in vehicle) {
  //   vehicle.loadCargo(1000);
  // }
  if(vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal:Animal) {
  let speed;
  switch(animal.type){
    case 'bird': {
      speed = animal.flyingSpeed
      break;
    }
    case 'horse': {
      speed = animal.runningSpeed;
      break;
    }
  }
    console.log("Moving with speed: " + speed)
}

moveAnimal({type: 'bird', flyingSpeed: 500});

const paragraph = document.querySelector('p');

const paragraph2 = document.getElementById('message-output');

const userInputElement = <HTMLInputElement>document.getElementById('user-input')!; // NOT FOR REACT!!!
const userInputElement2 = document.getElementById('user-input')! as HTMLInputElement; // FOR REACT!!!

// if not ! then you need to use if statement to check if html element truly exists
if(userInputElement){
  (userInputElement as HTMLInputElement).value = "Hi there!"
}

userInputElement.value = "Hi there"


