//JS FILE FOR SIMPLE CALC

var final = 0


document.getElementById('btn').addEventListener('click',function(){
    first = Number(document.getElementById('firstnum').value) 
    second = Number(document.getElementById('secondnum').value) 
    opt = document.getElementById('options').value 
    if(opt==='+'){
       final = first+second
       document.getElementById('answer').textContent = final
       }else if(opt==='-'){
           final = first-second
           document.getElementById('answer').textContent = final
       }else if(opt==='/'){
           final = first/second
           document.getElementById('answer').textContent = final   
       }else if(opt==='x'){
           final = first*second
           document.getElementById('answer').textContent = final
       }else{
           alert('ERROR')
       }
})
