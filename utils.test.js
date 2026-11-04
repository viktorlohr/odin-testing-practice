import {
  convertAsciiArrayToString,
  convertStringToAsciiArray,
} from "./utils.js";

test("Should turn string ot ascci array", () => {
  expect(convertStringToAsciiArray("Aa")).toStrictEqual([65, 97]);
});

test("Should turn ascii array to string", () => {
  expect(convertAsciiArrayToString([65, 97, 122])).toBe("Aaz");
});
