// CLOSEST IS USED TO WORK WITH THE CLOSEST ELEMENT OF AN ELEMENT

let btn = document.querySelector('.btn')

btn.addEventListener('click',event=>{
    //console.log(event.target) // IF YOU WILL DO THIS THEN IT WILL SHOW BUTTON OR MAIN2
    let close = event.target.closest('.main2')
    console.log(close) // NOW IT WILL ONLY SHOW .main2
})