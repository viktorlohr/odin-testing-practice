export function convertStringToAsciiArray(text) {
  return text.split("").map((c) => c.charCodeAt(0));
}

export function convertAsciiArrayToString(asciiArr) {
  return asciiArr.reduce(
    (acc, asciiNum) => acc + String.fromCharCode(asciiNum),
    "",
  );
}
