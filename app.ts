function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  console.log(typeof n1);

  // if(typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!')
  // }

  const result = n1 + n2;

  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 5;
const number2 = 2.4; // type inference
const printResult = true; // type inference

const result = add(number1, number2, printResult, "The result is: ");
console.log(result);
