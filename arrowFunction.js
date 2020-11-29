//ARROW FUNCTIONS ARE SIMPLE WAYS TO EXECUTE A FUNTION IN ES6 ON A LIST.

//ES5
var list5 = ['Wanda','Tony','Chris','Scarlet']
var mapList5 = list5.map(function(cur){
    console.log('I am'+cur)
})


//ES6
let list6 = ['Wanda','Tony','Chris','Scarlet']
let container = list6.map(cur => console.log(`I am ${cur}`)) // BETTER
//WORKING :-   Args__ => Function__

//FOR MULTIPLE ARGS:-
let anything = list6.map((cur,ID) => {
    console.log(`I am ${cur} and ${ID}`)
})
//WORKING:-   (Args) => {__FUnction__}

