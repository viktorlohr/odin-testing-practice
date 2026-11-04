export function convertStringToAsciiArray(text) {
  return text.split("").map((c) => c.charCodeAt(0));
}
