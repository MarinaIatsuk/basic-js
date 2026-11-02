class VigenereCipheringMachine {
  constructor(isDirect = true) { this.isDirect = isDirect; }
  encrypt(message, key) { return this.#transform(message, key, true); }
  decrypt(message, key) { return this.#transform(message, key, false); }
  #transform(message, key, encrypting) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
    const text = String(message).toUpperCase();
    const keyword = String(key).toUpperCase();
    let keyIndex = 0;
    let output = '';
    for (const char of text) {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        const keyCode = keyword.charCodeAt(keyIndex % keyword.length) - 65;
        const shift = encrypting ? keyCode : -keyCode;
        output += String.fromCharCode(((code - 65 + shift + 26) % 26) + 65);
        keyIndex += 1;
      } else output += char;
    }
    return this.isDirect ? output : [...output].reverse().join('');
  }
}
module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
