// const names: Array<string> = []; // string[]

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('this is done!');
//   }, 2000)
// });

// promise.then(data => {
//   data.split(' ');
// })

// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

// console.log(merge({ name: "Max" }, { age: 30 }));

// const mergedObj = merge({ name: "Max" }, { age: 30 });
// mergedObj.name; // this will not work

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: "Max" }, { age: 30 }));

// const mergedObj = merge({ name: "Max" }, 30); // constrained with object type (extends), will not work
const mergedObj = merge({ name: "Max" }, { age: 30 });
mergedObj.name; // this will work!

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText = "got no value";
  if (element.length > 0) {
    descriptionText = "Got " + element.length;
  }
  return [element, descriptionText];
}


console.log(countAndDescribe('Hi there!'))
console.log(countAndDescribe(['Hi there!', "whatever"]))
console.log(countAndDescribe([]))