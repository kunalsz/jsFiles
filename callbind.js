// CALL AND BIND ARE USED TO UTILISE FUNCTIONS AND PROPERITES OF DIFFERENT OBJECTS.

var John = {
    name:'John',
    age:18,
    intro: function(time){
        if(time === 'day'){
            console.log('hi i am'+this.name+'i am'+this.age+'years old.')
        }else if(time === 'night'){
            console.log('i am '+this.name)
        }
    }
}

var rose ={
    name:'Rose',
    age:19
}
John.intro.call(rose,'night')        // CALL - TO CALL THE FUNCTION ..  (THIS,ARGS)

var newRose = John.intro.bind(rose)   // Object.Function.bind(thisObject)
newRose('day')                        // Calling the function




