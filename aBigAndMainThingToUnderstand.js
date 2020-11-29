// A VERY IMPORTANT THING ABOUT RETURN,VARIABLE_FUNCTIONS,AND ANOYMOUS FUNCS(EEFI TOO)

var John =(function(){     // A PRIVATE FUNCTION WHO'S ELEMENTS CAN'T BE ACCESSED OUTSIDE IT'S SCOPE CHAIN
    var number = 245
    return{     // THE VARIABLE JOHN IS RETURNING :-  return RETURNS the main value
        ans:function(x){      // A METHOD 'ans' WHICH GIVES 'number+x'
            console.log(number+x)
        }
    }
})();

John.ans(3)

// In short John = A value 
//RETURN IS 'RETURNING' THE MAIN VALUE