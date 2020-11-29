// PASSING FUNCTIONS AS PARAMETERS

var numbers = [23,34,65,20,98]

function main(array,calcFunc){ //THIS FUNCTION TAKES TWO ARGS - An Array & A function
    var resArray = [] //EMPTY RESULT ARRAY
    for(var i = 0;i<array.length;i++){
        resArray.push(calcFunc(array[i])) //IT WILL - ADD A NEW ELEMENT TO THE resArray WHICH IS - Calculate(numbers[i]) 
        
    }
    return resArray    //RETURNING THE resArray in the end.
}

function Calculate(num){
    //IT WILL CALCULATE 
    return num+10
}

var answer = main(numbers,Calculate)  //ASSIGNING THE VALUE TO A VARIABLE AND PRINTING IT
console.log(answer)