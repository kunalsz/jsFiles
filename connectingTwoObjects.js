var Person = (function(){
    return{
        main:function(name,age){
            this.name = name
            this.age = age           // MAKING A PROTOTYPE
        }
    }
})();

var John = (function(person){
    return{
        john: new person.main('John',45) //USING THIS PROTOTYPE TO CREATE A NEW OBJECT
    }
})(Person);

console.log(John.john)

