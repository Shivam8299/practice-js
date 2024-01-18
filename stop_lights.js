let input = require('readline-sync');
let colour=input.question("enter the  colour ");
if(colour=='red'){
    console.log("stop");
}
else if(colour=='yellow'){
    console.log("get ready to go");
}
else if(colour=='green'){
    console.log("go");
}
else{
    console.log("not valid colour");
}