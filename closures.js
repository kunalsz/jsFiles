// CLOSURES IS SIMILAR TO NESTED FUNCTIONS  AND CLOSURES IN PYTHON
function jobteller(name){
    return function(age){         // IF STATEMENTS ARE IN THIS FUNCTION
        if(name==='john'){
            console.log('Doctor '+age)
        }else if(name==='jene'){
            console.log('Engineer '+age)
        }
    }
}

jobteller('john')(23)
jobteller('jene')(43)