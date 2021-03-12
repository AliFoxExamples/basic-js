const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi (disksNumber, turnsSpeed) {

  throw new CustomError('Not implemented');

//   let arr = [[],[],[]];

//   for (let i = disksNumber; i > 0; i--) {


//      arr[0].push(i);

//   }

// //     return arr;

  
//   let turns = 0;

//   for (let i = 0; ;){

//       if ( arr[i][arr[i].length-1] >  arr[i+1][arr[i+1].length-1] ) {

//           i++;

//       }

//       else {

//           arr[i+1].push(arr[i].pop());
//           turns++;

//       }
  
//   }





  
}



// function calculateHanoi(disksNumber, turnsSpeed) {
//   let turns = ((disksNumber-1)**3)-1;

//   let seconds =  Math.floor(turns/(turnsSpeed/3600))

//   return {turns, seconds}
// }