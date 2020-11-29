// ANONYMOUS FUNCTIONS ARE THE FUNCTIONS WHICH DO NOT HAVE A NAME

var John = (function(){
    var x = 23     // IT'S HIDDEN - PRIVATE
})()

//console.log(John.x)    // IT DOESN'T WORKS\\



var rose = {
    y:23       //PUBLIC VARIABLE
}
console.log(rose.y)