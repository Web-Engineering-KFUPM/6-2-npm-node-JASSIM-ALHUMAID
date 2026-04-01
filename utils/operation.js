export function add(numbers) {
  return { result: numbers.reduce((a, b) => a + b, 0) };
}
export function subtract(numbers) {
  return { result: numbers.reduce((a, b) => a - b, 0) };
}

export function multiply(numbers) {
  return { result: numbers.reduce((a, b) => a * b, 1) };
}

export function divide(numbers) {
  return { result: numbers.reduce((a, b) => a / b, 1) };
}
