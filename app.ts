function add(n1: number, n2: number): number {
  return n1 + n2;
}

const number1 = '5';
const number2 = 2.8;
// const result = add(number1, number2);
// console.log(result);

// enums will usually start incrementing from 0 if no default value is assigned
enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 'READ_ONLY',
  AUTHOR = 'AUTHOR',
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: string;
} = {
  name: 'Victor',
  age: 25,
  hobbies: ['bouldering', 'coding', 'cooking'],
  role: Role.ADMIN,
};

console.log(person.name);
if (person.role === Role.ADMIN) {
  console.log(`${person.name} is an ${person.role}`);
}
