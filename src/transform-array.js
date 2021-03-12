const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Object.prototype.toString.call(arr) !== '[object Array]') {

    throw new Error();

  }

  let target = JSON.parse(JSON.stringify(arr));

  let sequenes = {
    "--discard-next": function (arr,i) {
      if (arr[i+1] && (typeof arr[i+1] == 'number')) {
        return arr.filter((el,k,arr)=>{
            return !(k==i || k==i+1);
        })
      }
    },
     "--discard-prev" : function (arr,i){
      if (arr[i-1] && (typeof arr[i-1] == 'number')) {
        return arr.filter((el,k,arr)=>{
            return !(k+1==i || k==i);
        })
      }
     },
     "--double-next" : function (arr,i){
      if (arr[i+1] && (typeof arr[i+1] == 'number')) {
        arr.splice(i,2,arr[i+1]*2);          

        return arr;
      }
     },
     "--double-prev" : function (arr,i){
      if (arr[i-1] && (typeof arr[i-1] == 'number')) {
        
        arr.splice(i-1,2,arr[i-1]*2);          

        return arr;
      }
     }
  }
  

  for (let i = 0; i < target.length; i++) {
    if( target[i] in sequenes) {
        target = sequenes[target[i]](target, i);
        i = 0;
    }
  }

  return target;
};
