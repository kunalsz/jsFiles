//IN ES6 THERE 2 WAYS TO DECLARE A VARIABLE - let AND const

//ES5
var name5 = 'Kunal'

name5 = 'hello' //can be changed

console.log(name5)


//ES6
let name6 = 'Tony'
const age  = 23 // CAN'T BE CHANGED ,. CAN BE DECLARED ONLY ONCE

name6 = 'bye' //IT CAN BE CHANGED ALSO
//-----age = 20 // IT **CANNOT** BE CHANGED


console.log(name6+age)



function anything5(t){
    if(t){
        var nameAgain = 'Chris'
        //console.log(nameAgain)
    }
    console.log(nameAgain)
}

function anything6(t){
    if(t){
        let  nameOnceAgain = 'Scarlett'
        //console.log(nameOnceAgain)
    }
    console.log(nameOnceAgain) //LET AND CONST CAN ONLY BE USED IN SCOPE CHAIN -- NOT AFTER OR BEFORE.
}

anything5(true)
anything6(true)









