//PROMISES ARE USED IN THE EXECUTION OF ASYNCHRONOUS CODE TO AVOID CALL BACK HELL.
// I.E THEY ARE USED IN CALLING REQUESTS FROMT HE SERVER

//FOR MORE EXPLANATION SEE THE REGISTER IN WHICH IT IS WRITTEN.

/*
const test = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('hello')
    },2000)
})

test
.then(a_value=>{
    console.log(a_value)   // AFTER TWO SECS hello IS PRINTED.
})
*/

const recIDs = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve([123,234,23])
    },1500)
})// recIDs NOW RETURN [123,234,23]

const recipe = (recID)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(ID=>{
            resolve(`${ID}:Tomatoes and Potatoes`)
        },1500,recID)
    })
}// recipe IS A FUNCTION WHICH RETURNS A PROMISE


recIDs
.then(id=>{
    console.log(id)
    return recipe(id[1])
})
.then(rec=>{
    console.log(rec)
})
.catch(console.log('ERROR!!'))