function countCats(backyard) {
  return backyard.flat().filter((cell) => cell === '^^').length;
}
module.exports = { countCats };
