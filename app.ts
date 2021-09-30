// const person: object = { -> throws error when person.name
// const person: {} = {  -> the same as above

const person: {
  age: number;
  name: string;
} = {
  age: 30,
  name: "Maximillian",
};

console.log(person.name);
