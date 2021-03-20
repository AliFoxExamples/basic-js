const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor (bool=true) {
    this.bool = bool;
  }

  main (str,key,mod) {

    if (!str || !key) {
      throw new Error();
    }

    let str1 = str.toUpperCase().split(' ').join('').replace(/[\W\d]/g, '');
    let key1 = key.toUpperCase().split(' ').join('').replace(/[\W\d]/g, '');
  
    key1 = key1.repeat(Math.ceil(str1.length / key1.length)).slice(0, str1.length);
  
    let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
    let encText = [];   // Ecrypted/decrypted text.

    for (let i = 0; i < str1.length; i++) {

        let a = arr.indexOf(str1[i]);
        let b = arr.indexOf(key1[i]);
  
        let n;

        if(mod === "ENC") {
          n = a+b >= 26? a+b-26:a+b;
        }
        else {
          n = a-b < 0? a+26-b:a-b;
        }
        encText.push(arr[n]);
    }

    let resultText = [];
  
    for (let i=0; i < str.length; i++) {
      resultText.push( /[A-Za-z]/g.test(str[i]) ? encText.shift(): str[i] );
    }

    resultText = resultText.join('');
    
    return  this.bool? resultText: resultText.split('').reverse().join('');
  }

  encrypt(str,key) {
    return this.main(str,key,"ENC");
  }

  decrypt(str,key) {
    return this.main(str,key,"DEC");
  } 
}

module.exports = VigenereCipheringMachine;
