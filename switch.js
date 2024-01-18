// let input = require("readline-sync");
// let colour = input.question("enter the  colour:- ");
// switch (colour) {
//   case "red":
//     console.log("stop");
//     break;
//   case "yellow":
//     console.log("ready to go");
//     break;
//   case "green":
//     console.log("go!");
//     break;
//   default :
//     console.log("light is not working properly.");
//     break;
// }

let input = require("readline-sync");
let day = input.question("enter the  day:- ");

switch (day) {
  case "1" :
    console.log("Monday");
    break;
  case "2" :
    console.log("Tueaday");
    break;
  case "3" :
    console.log("Wednesday");
    break;
  case "4":
    console.log("Thursday");
    break;
  case "5" :
    console.log("friday");
    break;
  case "6" :
    console.log("Saturday");
    break;
  case "7":
    console.log("sunday");
    break;
  default:
    console.log("this is not valid day.");
}
