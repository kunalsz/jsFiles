// CLASSES ARE THE NEXT FORM OF FUNCTION CONSTRUCTORS

class person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    yearOfBirth(){
        console.log(2020-this.age)
    }
}

let kunal = new person('Kunal',16)


//sub-classes

class engineer extends person{
    constructor(name,age,job){
        super(name,age)
        this.job = job
    }
    rater(){
        if(this.job==='computer'){
            console.log("Congo! You are of my category.")
        }else{
            console.log('Sorry buddy!')
        }
    }
}

let kunal2 = new engineer('Kunal',16,'computer')
let john = new engineer('John',19,'mechanical')
