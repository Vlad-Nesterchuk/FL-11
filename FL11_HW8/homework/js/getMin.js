function getMin() {
  let minNum = arguments[0];
  for (let arg of arguments) {
    if (arg < minNum) {
      minNum = arg;
    }
  }
  return minNum;
}

console.log(getMin(1, 0, 8));