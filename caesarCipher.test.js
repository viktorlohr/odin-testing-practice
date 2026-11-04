import { caesarCipher } from "./caesarCipher.js";

test.each([
  ["xyz", "abc"],
  ["HeLLo", "KhOOr"],
  ["Hello, World!", "Khoor, Zruog!"],
])("should turn '%s' into '%s'", (input, expected) => {
  expect(caesarCipher(input, 3)).toBe(expected);
});
