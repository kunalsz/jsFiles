// EXPLANATION IN THE REGISTER

fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2487956/`)
.then(result=>{
    console.log(result)
    return result.json()
})
.then(data=>{
    let today = data.consolidated_weather[0]
    console.log(Math.round(today.max_temp))
})
.catch(error=>{
    console.log(error)
})