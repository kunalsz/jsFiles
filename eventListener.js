var but;
but = document.getElementById('btn')
var im;
im = document.getElementById('ima')
function changer(){
    im.src = 'space.jpg'
}
function changer2(){
    im.src = 'keyboard.jpg'
}



but.addEventListener('click',changer)
but.addEventListener('dblclick',changer2)