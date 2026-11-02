function deleteDigit(n) {
  const digits = String(n);
  let best = -Infinity;
  for (let i = 0; i < digits.length; i += 1) best = Math.max(best, Number(digits.slice(0, i) + digits.slice(i + 1)));
  return best;
}
module.exports = { deleteDigit };
