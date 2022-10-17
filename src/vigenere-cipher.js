const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(value = true){
    this.res = value;
  }
  encrypt(message, key) {
    if(!message || !key){
      throw new Error ('Incorrect arguments!');
    }
    let res = '';
    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < message.length; i++) {
      if(message[i].charCodeAt() >= 65 && message[i].charCodeAt()  <= 90){
        let letter = ((message[i].charCodeAt() - 65) + (key[j % key.length].charCodeAt() - 65)) % 26;
        letter = letter + 65;
      res += String.fromCharCode(letter);
        j++;
      }else{
        res += message[i];
      } 
    }
    if(this.res){
      return res;
    }else{
      return res.split("").reverse().join("")
    }
}
decrypt(encryptedMessage, key) {
  if(!encryptedMessage || !key){
    throw new Error ('Incorrect arguments!');
  }
  let res = '';
  encryptedMessage = encryptedMessage.toUpperCase();
  key = key.toUpperCase();

  for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
    if(encryptedMessage[i].charCodeAt() >= 65 && encryptedMessage[i].charCodeAt()  <= 90){
      let letter = ((encryptedMessage[i].charCodeAt() - 65) - (key[j % key.length].charCodeAt() - 65)) % 26;
      if(letter < 0){
        letter = 26 + letter;
      }
      letter = letter + 65;
    res += String.fromCharCode(letter);
      j++;
    }else{
      res += encryptedMessage[i];
    } 
  }
  if(this.res){
    return res;
  }else{
    return res.split("").reverse().join("")
  }

}
}

module.exports = {
  VigenereCipheringMachine
};
