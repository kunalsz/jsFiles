var ID = 0

document.getElementById('btn').addEventListener('click',function(){
    htmlcode = '<h3 id="%id%">%name%</h3>'
    name = document.getElementById('name').value 
    htmlcode = htmlcode.replace('%name%',name)
    ID = ID + 1
    htmlcode = htmlcode.replace('%id%',ID)
    document.querySelector('.main').insertAdjacentHTML('beforeend',htmlcode)
    
})