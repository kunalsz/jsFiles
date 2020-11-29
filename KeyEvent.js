// LIKE THE CLICK EVENT THERE'S ALSO EVENTS FOR KEY PRESSED

// FOR THE MOUSE CLICK
var btnListener = document.getElementById('btn')
btnListener.addEventListener('click',function(){
    console.log('hello there')
})



//// FOR THE KEY PRESS


//document.addEventListener('keypress',function(){        // ANY KEY // THE EVENT IS ADDED TO THE WHOLE DOCUMENT
//    console.log('bye there')
//})


document.addEventListener('keypress',function(event){ //IT'S LIKE THE EVENT IN OPENCV
    if(event.keyCode===13){     // KEYCODE = CODE OF THE KEY 13-ENTER
        console.log('enter was pressed')
    }
})

