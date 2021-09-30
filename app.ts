// const person: object = { -> throws error when person.name
// const person: {} = {  -> the same as above

const person = {
  age: 30,
  name: "Maximillian",
  hobbies: ["sports", "cooking"],
};

// let favouriteActivities: string[] -> will throw an error

// let favouriteActivities: any[]
// favouriteActivities = ['sports', 1]

let favouriteActivities: string[];
favouriteActivities = ["sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
