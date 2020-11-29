// MAPS ARE THE DIFFERENT VERSIONS OF OBJECTS
//Map
let car = new Map()
car.set('color','red')
car.set(1,'one')
car.set(true,"yes true!")

console.log(`${car.get('color')} ${car.get(1)} ${car.get(true)}`)


//Deleting items
car.delete('color')
console.log(car.get('color'))   //undefined as its deleted


//for loop in maps
for(let [key,value] of car.entries()){
    console.log(key+value)
}