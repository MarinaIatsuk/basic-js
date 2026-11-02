function sortByHeight(arr) {
  const sorted = arr.filter((height) => height !== -1).sort((a, b) => a - b);
  let index = 0;
  return arr.map((height) => height === -1 ? -1 : sorted[index++]);
}
module.exports = { sortByHeight };
