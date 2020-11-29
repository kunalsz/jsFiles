//DECONSTRUCTING IS USED TO ASSIGN MULTIPLE VALUES TO MULTIPLE VARIABLES AT THE SAME TIME.

//ES5
var john5 = ['John',23]
var name5 = john5[0]
var age5 = john5[1]
console.log(name5,age5) //WE HAVE TO DO LOTS OF WORK

//ES6
var [name6,age6] = ['Mark',34] // [vars] = [info]
console.log(name6,age6) //LESS AND EFFICIENT CODE