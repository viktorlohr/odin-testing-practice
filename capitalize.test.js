import { capitalize } from "./capitalize.js";

test.each([
  ["foo", "Foo"],
  ["bar", "Bar"],
])("should turn '%s' to '%s'", (input, expected) => {
  expect(capitalize(input)).toBe(expected);
});
