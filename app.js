function add(n1, n2) {
    return n1 + n2;
}
var number1 = '5';
var number2 = 2.8;
// const result = add(number1, number2);
// console.log(result);
// enums will usually start incrementing from 0 if no default value is assigned
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["READ_ONLY"] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Victor',
    age: 25,
    hobbies: ['bouldering', 'coding', 'cooking'],
    role: Role.ADMIN
};
console.log(person.name);
if (person.role === Role.ADMIN) {
    console.log("".concat(person.name, " is an ").concat(person.role));
}
