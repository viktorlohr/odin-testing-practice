const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Division through 0 is undefined");
  }
  return a / b;
};

export const calculator = { add, subtract, divide, multiply };
