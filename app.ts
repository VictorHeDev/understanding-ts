// unknown type can be assigned to anything without an error
// unknown is a little more rescrictive than type: any
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Victor';
if (typeof userInput === 'string') {
  userName = userInput;
}

// ther return type of this function is not just void -> it's never
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError('An error occured', 500);
console.log(result);
