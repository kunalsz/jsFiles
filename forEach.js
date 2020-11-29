//FOR EACH - AS THE NAME SUGGESTS FOR EACH ITEM IN SOMETHING IT WILL PERFORM A TASK

var SampleArray = ['hi','bye','yo','hello'] //A STRING
var ranNum = [3,56,23,55]
/*
SampleArray.forEach(function(item){ //IT WAORKS ON EVERY ELEMENT OF THE STRING
    console.log(item+' k') // HERE ITEM IS BY DEFAULT = EVERY ELEMENT
})
*/
ranNum.forEach(function(elem,fj,rt){

    console.log(elem) //ELEMENT
    console.log(fj) //ID
    console.log(rt) //THE ARRAY
    
})

//console.log(SampleArray)

// THE forEach FUNCTION HAS THREE DEFAULT ARGS = 
/*
1.The element(at that current time)
2.The ids or the numbers of that particular item.
3.The array itself
*/