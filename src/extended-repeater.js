function repeater(str, options = {}) {
  const base = String(str);
  const addition = options.addition === undefined ? '' : String(options.addition);
  const repeatTimes = Number.isInteger(options.repeatTimes) ? Math.max(0, options.repeatTimes) : 1;
  const additionTimes = Number.isInteger(options.additionRepeatTimes) ? Math.max(0, options.additionRepeatTimes) : (addition ? 1 : 0);
  const separator = options.separator === undefined ? '+' : options.separator;
  const additionSeparator = options.additionSeparator === undefined ? '|' : options.additionSeparator;
  const extra = Array.from({ length: additionTimes }, () => addition).join(additionSeparator);
  const unit = base + extra;
  return Array.from({ length: repeatTimes }, () => unit).join(separator);
}
module.exports = { repeater };
