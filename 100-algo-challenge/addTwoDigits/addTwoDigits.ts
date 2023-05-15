export function addTwoDigits(n: any): number {
  const strArr = n.toString().split('');
  return parseInt(strArr[0]) + parseInt(strArr[1]);
}

console.log(addTwoDigits(29));
