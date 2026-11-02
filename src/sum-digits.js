function getSumOfDigits(n) {
  let value = Math.abs(n);
  while (value >= 10) {
    value = String(value).split('').reduce((sum, digit) => sum + Number(digit), 0);
  }
  return value;
}
module.exports = { getSumOfDigits };
