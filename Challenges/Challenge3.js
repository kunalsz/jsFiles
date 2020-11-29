//CODING CHALLENGE NO. 3
var John = {
    fullName : 'John Smith',
    mass : 50,
    height : 2,
    bmi :  function(){
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
};

var Mark ={
    fullName : 'mark twain',
    mass : 60,
    height : 1.5,
    bmi :  function(){
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
};

a = John.bmi();
b = Mark.bmi();

if(a>b){
    console.log(John.fullName,a)
}else{
    console.log(Mark.fullName,b)
};

// PASSED