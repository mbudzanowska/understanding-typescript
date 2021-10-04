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

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: "Max" }, { age: 30 }));

const mergedObj = merge({ name: "Max" }, { age: 30 });
mergedObj.name; // this will work!
