let input = require('readline-sync');
let size=input.question("enter the  size:- ");
if(size=='XL'){
    console.log("price of 'XL' size is 250Rs.");
}
else if(size=='L'){
    console.log("price of 'L' size is 200Rs.");
}
else if(size=='M'){
    console.log("price of 'M' size is 100Rs.");
}
else if(size=='S'){
    console.log("price of 'S'  size is 50Rs.");
}
else{
    console.log("This is invalid size. ");
}