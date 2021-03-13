const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr,temper) {

  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    throw new Error();
  }
  
  let target = Array.from(arr);

  let sequenes = {
    "--discard-next": function (arr,i) {
      if (i<arr.length-1) {
        return arr.map((el,k,arr)=> k==i || k==i+1 ? '--discarded': el );
      }
      
      return arr.filter((el,k,arr)=> k!=i);
    },
    "--discard-prev" : function (arr,i){
      if (i && arr[i-1] != '--discarded') {
        return arr.map((el,k,arr)=> k==i || i==k+1 ? '--discarded': el );
      }
      
      return arr.filter((el,k,arr)=> k!=i);
      
    },
    "--double-next" : function (arr,i){
      if (i<arr.length-1) {
        return arr.map((el,k,arr)=>k==i?arr[k+1]:arr[k]);
      }

      return arr.filter((el,k,arr)=> k!=i);
    },
    "--double-prev" : function (arr,i){
      if (i && arr[i-1] != '--discarded') {
        return arr.map((el,k,arr)=>k==i?arr[k-1]:arr[k]);
      }

      return arr.filter((el,k,arr)=> k!=i);
    }
  }

  for (let i = 0; i < target.length; i++) {
    if( target[i] in sequenes) {
      target = sequenes[target[i]](target, i);
      i = 0;
    }
  }

  return target.filter(el=>el!=='--discarded');
};