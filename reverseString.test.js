import { reverseString } from "./reverseString.js";

test("should turn 'foo' to 'oof'", () => {
  expect(reverseString("foo")).toBe("oof");
});

test.each(
  [
    ["foo", "oof"],
    ["Foo", "ooF"],
    ["bar", "rab"],
  ],
  "should turn '%s' into '%s'",
  (input, expected) => {
    expect(reverseString(input)).toBe(expected);
  },
);
