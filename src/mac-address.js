function isMAC48Address(inputString) {
  return typeof inputString === 'string' && /^(?:[0-9A-F]{2}-){5}[0-9A-F]{2}$/.test(inputString);
}
module.exports = { isMAC48Address };
