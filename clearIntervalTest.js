var x = document.getElementById('x')
var stop = document.getElementById('stop')
var reset = document.getElementById('reset')

var b =10

var timer = setInterval(ti,1000)

function ti(){
    x.innerHTML = b;
    b = b-1
    if (b <= 0) x.innerHTML = 0;
}

stop.addEventListener('click',function(){
    clearInterval(timer)
})

reset.addEventListener('click',function(){
    b = 10
    ti()

})

