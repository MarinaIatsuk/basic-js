function getSeason(date) {
  if (arguments.length === 0) return 'Unable to determine the time of year!';
  let time;
  try {
    // Calling the intrinsic rejects fake objects, even if they spoof Date's prototype.
    time = Date.prototype.getTime.call(date);
  } catch (error) {
    throw new Error('Invalid date!');
  }
  if (!Number.isFinite(time)) throw new Error('Invalid date!');
  const month = Date.prototype.getMonth.call(date);
  if (month === 11 || month <= 1) return 'winter';
  if (month <= 4) return 'spring';
  if (month <= 7) return 'summer';
  return 'autumn';
}
module.exports = { getSeason };
