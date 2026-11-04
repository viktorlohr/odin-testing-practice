export function capitalize(word) {
  const first = word.slice(0, 1);
  const rest = word.slice(1);

  return first.toUpperCase() + rest;
}
