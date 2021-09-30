function add(n1: number, n2:number){
  console.log(typeof n1)

  if(typeof n1 !== 'number' || typeof n2 !== 'number') {
    throw new Error('Incorrect input!')
  }
  return n1 + n2;
}

const number1 = '5';
const number2 = 2.4;

console.log(add(number1, number2));