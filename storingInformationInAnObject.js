//STORING INFORMATION TAKEN AS INPUT FROM THE WEB PAGE

var main = (function(){
    var Person = function(name,age){     //THE BLUEPRINT
        this.name = name
        this.age = age
    }
    var storage = []    //THE ARRAY IN WHICH ALL THE ELEMENTS WILL BE STORED
    return{
        newPersonFunc:function(Name,Age){   //THE MAIN WORKER
            var newPerson,Id;
            if(storage.length>0){
                Id = storage.length + 1
            }else if(storage.length === 0){
                Id = 0
            }
            newPerson = new Person(Name,Age,Id)
            storage.push(newPerson)
            console.log(storage)
            return storage //RETURNING THE ARRAY
        }
        
    }
})(); //WORKING FINE


var runner = (function(arg){     // THIS WILL WORK ON THE WEB PAGE

    document.getElementById('btn').addEventListener('click',function(){ //SETTING UP EVENT LISTENER
        var personData = {  //THE CURRENT DATA WILL BE RECORDED
            name:document.getElementById('name').value,
            age:document.getElementById('age').value 
        }
        main.newPersonFunc(personData.name,personData.age) //THIS DATA WILL BE WORKED ON BY main.newPersonFunc
        
    })
    
})(main);










