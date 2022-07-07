function add(
  input1: number,
  input2: number,
  input3: boolean,
  input4: string
): any {
  if (input3) {
    let sum = input1 + input2;
    console.log(input4 + sum.toString());
  }
}

const result = n1 + n2;
if (showResult) {
  console.log(phrase + result);
} else {
  return result;
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is ';

add(number1, number2, printResult, resultPhrase);
