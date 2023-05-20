export function adjacentElementsProduct(
  inputArray: number[]
): number {
  let result = 0;

  for (let i = 0; i < inputArray.length; i++) {
    let product = inputArray[i] * inputArray[i + 1];
    if (product > result) {
      result = product;
    }
  }

  return result;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
