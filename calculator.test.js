import { calculator } from "./calculator.js";

test("should return 5, the sum of 2 and 3", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("should return -1, the difference of 2 and 3", () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
});

test("should return 6, the product of 2 and 3", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test("should roughly return 0.67, the quotient of 2 and 3", () => {
  expect(calculator.divide(2, 3)).toBeCloseTo(0.67);
});

test("should throw", () => {
  expect(calculator.divide(2, 0)).toThrow("Division through 0 is undefined");
});
