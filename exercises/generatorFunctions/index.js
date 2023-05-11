// Generator functions
function* showReturnValue() {
  yield 10;
  yield 20;
}

const result = showReturnValue();
console.log(result.next());
console.log(result.next());
console.log(result.next());
