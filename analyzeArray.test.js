import { analyzeArray } from "./analyzeArray.js";

const input = analyzeArray([1, 8, 3, 4, 2, 6]);

const expected = {
  average: 4,
  min: 1,
  max: 8,
  length: 6,
};

test("should turn " + input + " into " + expected, () => {
  expect(analyzeArray(input)).toStrictEqual(expected);
});
