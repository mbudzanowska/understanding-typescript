// const person: object = { -> throws error when person.name
// const person: {} = {  -> the same as above

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  age: 30,
  name: "Maximillian",
  hobbies: ["sports", "cooking"],
  role: [2, "author"],
};

person.role.push("admin"); // this will work EXCEPTION!!
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
