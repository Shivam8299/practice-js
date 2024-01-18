let input = require('readline-sync');
let marks=input.question("enter the  marks:- ");
if(marks>90 && marks<=100){
    console.log('grade A+')
}
else if(marks>80 && marks<=90){
    console.log('grade A')
}
else if(marks>70 && marks<=80){
    console.log('grade B')
}
else if(marks>60 && marks<=70){
    console.log('grade C')
}
else if(marks>=50 && marks<=60){
    console.log('grade D')
}
else if(marks<50 && marks>=0){
    console.log('Fail')
}
else{
    console.log("invalid marks")
}