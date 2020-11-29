var dicenum,diceimage,butt,butt2,tscore,adder,chance;


diceimage =document.getElementById('dices')
butt = document.getElementById('but1')
butt2 = document.getElementById('but2')
tscore = document.getElementById('total')
adder =0

butt.addEventListener('click',function(){
    dicenum = Math.floor(Math.random()*6)+1;
    adder += dicenum
    diceimage.src = 'dice-'+dicenum+'.png'
    document.getElementById('num').textContent = dicenum;
    tscore.textContent =  adder
})
butt2.addEventListener('click',function(){
    document.getElementById('num').textContent = 1
    diceimage.src = 'dice-1.png'
    adder = 0
    tscore.textContent = 0
})









