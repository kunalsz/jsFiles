function jobteller(name){
    if(name==='john'){
        return function(age){
        console.log(name + ' is a doctor and is '+age)
    }
    }else if(name==='jene'){
        return function(age){
            console.log(name + ' is an engineer and is '+age)
        }
    }else{
        console.log('idk')
    }
}

jobteller('john')(23)    //FOR GIVING MULTIPLE PARAMETERS ()()
jobteller('jene')(39)

var tell  = jobteller('john')  //ASSIGNING FUNCTION TO A VARIABLE
tell('90') // CALLING A FUNCTION BYA VARIABLE
