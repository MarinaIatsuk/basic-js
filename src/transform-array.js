function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  const controls = new Set(['--discard-next', '--discard-prev', '--double-next', '--double-prev']);
  const copies = arr.map(() => 1);
  for (let i = 0; i < arr.length; i += 1) {
    const command = arr[i];
    if (!controls.has(command)) continue;
    if (command.endsWith('next') && i + 1 < arr.length && copies[i + 1] > 0) {
      if (command === '--discard-next') copies[i + 1] = 0;
      else copies[i + 1] += 1;
    } else if (command.endsWith('prev') && i > 0 && copies[i - 1] > 0) {
      if (command === '--discard-prev') copies[i - 1] -= 1;
      else copies[i - 1] += 1;
    }
  }
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (!controls.has(arr[i]) && copies[i] > 0) {
      for (let j = 0; j < copies[i]; j += 1) result.push(arr[i]);
    }
  }
  return result;
}
module.exports = { transform };
