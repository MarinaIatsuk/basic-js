function calculateHanoi(diskNumber, turnsSpeed) {
  const turns = 2 ** diskNumber - 1;
  return { turns, seconds: Math.floor((turns / turnsSpeed) * 3600) };
}
module.exports = { calculateHanoi };
