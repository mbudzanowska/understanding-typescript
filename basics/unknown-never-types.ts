let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}


// return type of this func is never, even if the plugin shows void
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError("An error occured!", 300);
console.log(result)