export function absoluteValuesSumMinimization(a: number[]): number {
  // Check if the array is even or odd
  const isEven = a.length % 2 === 0;
  // If even, return the middle number
  return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
  // If odd, return the middle number
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
