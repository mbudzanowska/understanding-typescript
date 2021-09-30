function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("result: " + num);
  return;
}

console.log(printResult(add(12, 5)));


let someValue: undefined;