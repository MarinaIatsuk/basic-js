function getCommonCharacterCount(s1, s2) {
  const counts = new Map();
  for (const char of s1) counts.set(char, (counts.get(char) || 0) + 1);
  let common = 0;
  for (const char of s2) {
    const count = counts.get(char) || 0;
    if (count) { common += 1; counts.set(char, count - 1); }
  }
  return common;
}
module.exports = { getCommonCharacterCount };
