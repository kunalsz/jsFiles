// INIT FUNCTIONS ARE THE FUNCTIONS THAT ARE EXECUTED BEFORE ANY FUNCTION - LIKE IN PYTHON

var main = (function(){
    var x = 25
    var add = function(b){ //THE FUNCTION
        console.log(x+b)
    }
    return{
        add  // RETURNING THE FUNCTION TO THE GLOBAL SCOPE
    }
})();

main.add(10) // EXECUTING THE FUNCTION