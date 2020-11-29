//SPREAD OPERATOR IS USED TO SPREAD/EXPAND THE ELEMENTS OF AN ARRAY.


function add(a,b){
    console.log(a+b)
}

var sumAr = [2004,500]

add(...sumAr)

// => function(...THEARRAY) , 3dots
// Its acts on all the elements of the array.