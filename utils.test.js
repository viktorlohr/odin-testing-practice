import { convertStringToAsciiArray } from "./utils.js";

test.only("Should do as named", () => {
  expect(convertStringToAsciiArray("Aa")).toStrictEqual([65, 97]);
});
