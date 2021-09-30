// const person: object = { -> throws error when person.name
// const person: {} = {  -> the same as above

enum Role {
  ADMIN = 4, READ_ONLY = 100, AUTHOR = "DUPA"
}

const person = {
  age: 30,
  name: "Maximillian",
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN
};

// person.role.push("admin"); // this will work EXCEPTION!!
// person.role[1] = 20; -> will throw an eror

// let favouriteActivities: string[] -> will throw an error

// let favouriteActivities: any[]
// favouriteActivities = ['sports', 1]

let favouriteActivities: string[];
favouriteActivities = ["sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

console.log(Role)

const CustomRole = {};
CustomRole[0] = "ADMIN";
CustomRole["ADMIN"] = 0;
console.log(CustomRole);


if(person.role === Role.AUTHOR){
  console.log("this will work")
}