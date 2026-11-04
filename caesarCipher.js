import {
  convertAsciiArrayToString,
  convertStringToAsciiArray,
} from "./utils.js";

export function caesarCipher(text, shift) {
  const asciis = convertStringToAsciiArray(text);

  return convertAsciiArrayToString(
    asciis.map((num) => calculateNewPosition(num, shift)),
  );
}

function calculateNewPosition(asciiNum, shift) {
  let offset;
  if (65 <= asciiNum && asciiNum <= 90) {
    offset = 65;
  } else if (97 <= asciiNum && asciiNum <= 122) {
    offset = 97;
  } else {
    return asciiNum;
  }

  return offset + ((asciiNum + shift - offset) % 26);
}
