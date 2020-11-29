//THERE ARE MANY NEW FUNCTIONS ADDED TO STRINGS IN ES6 :-

var name = 'Tony'
let surname = ' Stark'
const year = 2008

//ES5
console.log(name+ surname+'was first seen in the MCU in '+year)

//ES6
console.log(`${name} ${surname} was first seen in the mcu in ${year}`) // MORE CONVINIENT TO USE   ${__variable__}

let string = 'Hello'
if(string.startsWith('H')){ ///STARTS WITH
    console.log('true')
}

if(string.endsWith('o')){   //ENDS WITH
    console.log("True")
}