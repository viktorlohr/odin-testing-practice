export function reverseString(s) {
  return s.split("").reduce((acc, letter) => letter + acc, "");
}
