// ASYNC IS THE BETTER ALTERNATIVE FOR USING .then  IN PROMISES.


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

// ASYNC FUNTION

async function recipeFunc(){
    let recipeID = await recIDs
    console.log(recipeID)
    let Recipe = await recipe(recipeID[1])
    console.log(Recipe)

    return Recipe
}

recipeFunc()
.then(rec =>{
    console.log(`again ${rec}`)
})