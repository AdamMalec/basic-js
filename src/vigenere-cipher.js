const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {

  constructor(normalDirect = true) {
    this.normalDirect = normalDirect;
    this.alphabet = Array.from({ length: 26 }, (x, i) => (i + 10).toString(36));
  }

  leverage(message, key, decrypt = false) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    let result = "";
    let keyStartPosition = 0;
    const lowKey = key.toLowerCase();
    const KEY_LENGTH = key.length;

    for (const letter of message) {
      const lowLetter = letter.toLowerCase();

      if (this.alphabet.includes(lowLetter)) {
        const letterIndex = this.alphabet.indexOf(lowLetter);
        const keyIndex = this.alphabet.indexOf(lowKey[keyStartPosition]);
        let shift;

        if (decrypt) {
          shift = letterIndex - keyIndex;
          if (shift < 0) shift += 26;
        } else {
          shift = letterIndex + keyIndex;
          console.log(shift);
          if (shift > 25) shift -= 26;
        }

        const chip = this.alphabet[shift];
        result += chip.toUpperCase();

        keyStartPosition += 1;
        if (keyStartPosition >= KEY_LENGTH) {
          keyStartPosition = 0;
        }
      } else {
        result += letter;
      }
    }

    return this.normalDirect ? result : result.split("").reverse().join("");
  }

  encrypt(message, key) {
    return this.leverage(message, key);
  }

  decrypt(message, key) {
    return this.leverage(message, key, true);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
