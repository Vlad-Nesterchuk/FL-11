function reverseNumber(number) {
  let revNumber="";
  let ifNegative = false;
  if (number < 0) {
    number *= -1;
    ifNegative = true;
  }
  for (let arg of number.toString()) {
    revNumber = arg + revNumber;
  }
  if (ifNegative) {
    revNumber = '-' + revNumber;
  }
  return Number(revNumber);
}

console.log(reverseNumber(1238));