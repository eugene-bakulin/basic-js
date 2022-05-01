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

  constructor (directMachine) {
    this.directMachine = directMachine;
  }

  encrypt(message, key) {

    if (!arguments[1]||!arguments[0]) {
      throw new Error('Incorrect arguments!');
    }

    let alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let arr = new Array(26);
    let index_str;
    let index_stolb;
   
    arr[0] = alpha;

    for (let i = 1; i < arr.length; i++) {
      arr[i] = arr[i-1].slice();
      arr[i].push(arr[i-1][0]);
      arr[i] = arr[i].slice(1, arr[i].length);
    }
  
    message = message.toUpperCase();
    key = key.repeat(Math.ceil(message.length/key.length)).toUpperCase();
  
    let cipher = new Array(message.length);
    
    let key1 = [];
    key1 = key.split('');
  
    for (let i = 0; i < message.length; i++) {
        if ((message[i].charCodeAt(0) < 65) || (message[i].charCodeAt(0) > 122) || (message[i].charCodeAt(0) == 94)) {
            key1.splice(i,0,message[i])
        }

    }
  
    for (let i = 0; i < message.length; i++) {
        if ((message[i].charCodeAt(0) < 65) || (message[i].charCodeAt(0) > 122) || (message[i].charCodeAt(0) == 94)) { 
            cipher[i] = message[i];  
        } else {
          index_str = arr[0].indexOf(message[i]);
          index_stolb = arr[0].indexOf(key1[i]);
          cipher[i] = arr[index_str][index_stolb];
      }
    }

    cipher = cipher.join('')

    if ((this.directMachine === true)||(this.directMachine === undefined)) {
      return cipher;
    } else {
      return cipher.split("").reverse().join("");
    }
  
  
  }

  decrypt(encryptedMessage, key) {

    if (!arguments[1]||!arguments[0]) {
      throw new Error('Incorrect arguments!');
    }
    
    let alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let arr = new Array(26);
    let index_str;
    let index_stolb;
  
    arr[0] = alpha;

    for (let i = 1; i < arr.length; i++) {
      arr[i] = arr[i-1].slice();
      arr[i].push(arr[i-1][0]);
      arr[i] = arr[i].slice(1, arr[i].length);
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.repeat(Math.ceil(encryptedMessage.length/key.length)).toUpperCase();
  
    let uncipher = new Array(encryptedMessage.length);
    
    let key1 = [];
    key1 = key.split('');
  
    for (let i = 0; i < encryptedMessage.length; i++) {
        if ((encryptedMessage[i].charCodeAt(0) < 65) || (encryptedMessage[i].charCodeAt(0) > 122) || (encryptedMessage[i].charCodeAt(0) == 94)) {
            key1.splice(i,0,encryptedMessage[i])
        }

    }
  
    for (let i = 0; i < encryptedMessage.length; i++) {
        if ((encryptedMessage[i].charCodeAt(0) < 65) || (encryptedMessage[i].charCodeAt(0) > 122) || (encryptedMessage[i].charCodeAt(0) == 94)) { 
            uncipher[i] = encryptedMessage[i];  
        } else {
          index_str = arr[0].indexOf(key1[i]);
          index_stolb = arr[index_str].indexOf(encryptedMessage[i]);
          uncipher[i] = arr[0][index_stolb];
      }
    }

    uncipher = uncipher.join('')

    if ((this.directMachine === true)||(this.directMachine === undefined)) {
      return uncipher;
    } else {
      return uncipher.split("").reverse().join("");
    }

  }

}

module.exports = {
  VigenereCipheringMachine
};
