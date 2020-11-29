

async function Weather(){
    let now = await fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2487956/')
    console.log(now)
    let better = await now.json()
    let today = better.consolidated_weather[0]
    console.log(today.min_temp)

    return today
}

Weather().then(w=>{
    console.log(w.max_temp)
})