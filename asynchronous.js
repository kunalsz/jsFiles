// ASYNCHRONOUS JS IS THE JS THAT WORKS IN THE BACKGROUND WITHOUT AFFECTING THE MAIN TASK.IT IS GENERALLY USED TO RECIEVE REQUESTS FROM THE SERVER.

const second = () => {
    setTimeout(()=>{
        console.log('hello second')
    },1500)
}

const first = ()=>{
    console.log("first")
    second()
    console.log("third") //FIRST IT HAPPENS AND AFTER 1.5 SEC second() IS EXECUTED.
}

first()