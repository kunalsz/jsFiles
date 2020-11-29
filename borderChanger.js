var ima,but1,but2,but3;
ima = document.getElementById("key")
but1 = document.getElementById("butred")
but2 = document.getElementById("butblue")
but3 = document.getElementById("butgreen")


function changerRed(){
    ima.style.border = "2px solid red"  // USE "" FOR EDITING or writing some code
}
function changerBlue(){
    ima.style.border = "2px solid blue"  
}
function changerGreen(){
    ima.style.border = "2px solid green"  
}

but1.addEventListener('click',changerRed)
but2.addEventListener('click',changerBlue)
but3.addEventListener('click',changerGreen)