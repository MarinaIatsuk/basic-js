function encodeLine(str) {
  if (str.length === 0) return '';
  let result = '';
  let count = 1;
  for (let i = 1; i <= str.length; i += 1) {
    if (str[i] === str[i - 1]) count += 1;
    else {
      result += (count > 1 ? count : '') + str[i - 1];
      count = 1;
    }
  }
  return result;
}
module.exports = { encodeLine };
