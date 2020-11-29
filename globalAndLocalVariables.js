// GLOBAL AND LOCAL VARIABLES IN JAVASCRIPT

/*
var a = "hi "
one()                 // SCOPE - A function can be used before it is executed.
function one(){
    var b = 'hello '
    two()
    function two(){
        var c = "hey "              // c is a local variable in this case
        console.log(a+b+c)     // a is a global variable and b is a variable inside the main function so the values of both a and b are printed
    }                    
}
 ----------------  OUTPUT = hi hello hey
*/

var a = 'hi '
one()
function one(){
    var b = "hey "
    two()
    function two(){
        var c = "hello "
        three()
    }
}

function three(){
    var d  = "bye "
    //console.log(a+b+c+d)  // IF WE DO THIS THE CONSOLE WILL SHOW ERROR AS b AND c BOTH ARE LOCAL VARIABLES IN OTHER FUNCTION WHICH CAN'T BE                                accessed
    console.log(a+d)  // THIS SHOWS NO ERROR AS a IS A GLOBAL VARIABLE
}