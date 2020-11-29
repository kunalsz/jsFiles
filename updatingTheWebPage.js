var mainNum = 200;
document.getElementById('btn').addEventListener('click',function(){
    var num = [24,50,46]
    num.forEach(function(cur){
        var perc = (cur/mainNum)*100
        //console.log(perc + '%')
        var html = '<h4>%perc%%</h4>'
        html = html.replace('%perc%',perc)
        document.getElementById('btn').insertAdjacentHTML('afterend',html)
    })
})


//I DON'T KNOW WHY I AM CODING THIS STUPID THING...BYE