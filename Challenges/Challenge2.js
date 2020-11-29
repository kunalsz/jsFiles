var bill1,bill2,bill3;
bill1=48;
bill2=124;
bill3=268;
var tip;
function checker(bill){
    if(bill<50){
        tip = (0.2*bill);
    }else if(bill > 50 && bill < 200){
        tip = 0.15 * bill;
    }else if(bill>200){
        tip=0.1 * bill;
    }else{
        tip =0;
    }
    
}
//SOME MESSY ARRAYS
total_array =[];
tip_array = [];
//
checker(268);
console.log(tip);
tip_array.push(tip);
total_array.push((tip+bill3));
//
checker(124);
console.log(tip);
tip_array.push(tip);
total_array.push((tip+bill2));
//
checker(48);
console.log(tip);
tip_array.push(tip);
total_array.push((tip+bill1));
//
console.log(tip_array);
console.log(total_array);

