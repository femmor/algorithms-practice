export function allLongestStrings(inputArray: string[]): string[] {
  const newArr: string[] = [];
  let maxLength = 0;

  // Find the maxLength
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > maxLength) {
      maxLength = inputArray[i].length;
    }
  }

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length >= maxLength) {
      newArr.push(inputArray[i]);
    }
  }

  return newArr;
}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
