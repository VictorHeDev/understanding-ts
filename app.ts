function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

printResult(add(5, 12));

// Function types describe parameters and return types
let combineValues: (a: number, b: number) => number;

combineValues = add;
console.log(combineValues(8, 8));
