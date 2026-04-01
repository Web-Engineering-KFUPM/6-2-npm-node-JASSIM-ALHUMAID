import _ from "lodash";

export function parseNumbers(input) {
  return _.compact(_.map(input, (num) => parseFloat(num)));
}

export function isValidOperation(operation) {
  return _.includes(["add", "subtract", "multiply", "divide"], operation);
}
