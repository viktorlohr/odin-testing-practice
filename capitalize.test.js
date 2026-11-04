import { capitalize } from "./capitalize.js";

// test("should turn 'foo' to 'Foo'", () => {
//   expect(capitalize("foo")).toBe("Foo");
// });

test.each([
  ["foo", "Foo"],
  ["bar", "Bar"],
])("should turn '%s' to '%s'", (input, expected) => {
  expect(capitalize(input)).toBe(expected);
});
