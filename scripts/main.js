/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
//
// let array = ["2","3"];
// let x = 0;
// let emptyArray = [];
//
// let number1 = Number(array[0]);
// let number2 = Number(array[1]);
//
// let total = number1 + number2;
//
// console.log(number1 + number2);
//
// emptyArray.push(total);
//
// console.log(emptyArray);




function handValue (hand) {

let totalHandValue = 0;
// // let array = [];
//
// let number1 = Number(hand[0]);
// let number2 = Number(hand[1]);
// let number3 = Number(hand[2]);
//
// totalHandValue = number1 + number2 + number3;
//
// // array.push(totalHandValue);
//
// console.log(totalHandValue);

for (var i = 0; i < hand.length; i++) {

  if (hand[i] === "K" || hand[i] === "Q" || hand[i] === "J"){
      totalHandValue += 10;
  }
  else if (Number(hand[i])) {
    let number = Number(hand[i]);
    totalHandValue += number;

  }
  else if (hand[i] === "A"){
    hand.splice(hand[i],1);
      if(totalHandValue < 11){
        totalHandValue += 11;
      }
      else{
        totalHandValue += 1;
        hand.push('A');
      }

  }



}

  console.log(totalHandValue);



  return totalHandValue;
}















// console.log("My hand equals " + hand);
//
// let length = hand.length;
// let total = 0;
// let myhandvalue = 0;
//
// for (var i = 0; i < hand.length; i++) {
//   if (hand[i]!== "A"){
//     switch (hand[i]){
//       case '2':
//         myhandvalue += 2;
//         break;
//       case '3':
//     myhandvalue += 3;
//     break;
//     case '4':
//     myhandvalue += 4;
//     break;
//     case '5':
//     myhandvalue += 5;
//     break;
//     case '6':
//     myhandvalue += 6;
//     break;
//     case '7':
//     myhandvalue += 7;
//     break;
//     case '8':
//     myhandvalue += 8;
//     break;
//     case '9':
//     myhandvalue += 9;
//     break;
//     case '10':
//     myhandvalue += 10;
//     break;
//     case 'J':
//     myhandvalue += 10;
//     break;
//     case 'Q':
//     myhandvalue += 10;
//     break;
//     case 'K':
//     myhandvalue += 10;
//     break;
//     }
//   } else {
//
//     // "A" = 1 || 11;
//
//   }
//
//   console.log(myhandvalue);



// if (hand[i] === "K" || === "Q" || === "J"){
//   handValue = 10;
// }

  // total = length;
  // let number = hand[0];
// }


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
