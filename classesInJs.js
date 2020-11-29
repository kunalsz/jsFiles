//CREATED ON 23/10/2019

var john = {
    name:"john",
    birthyear:2004,
    gender:"male",
}

var Person = function(name,gender,birthyear){   // THE BLUEPRINT CLASS
    this.name = name;
    this.gender = gender;
    this.birthyear = birthyear;   
}
Person.prototype.calAge = function(){  // PROTOTYPE MEANS ADDING/CREATING SOMETHING WHICH IS NOT THERE
    console.log(2019-this.birthyear)
}

var mike = new Person('Mike','male','2001')  //INHERITING THE PERSON CLASS/CONSTRUCTOR(IN JS)
console.log(mike.gender)
mike.calAge()

var jennifer = new Person('jennifer','female','1999')
jennifer.calAge()