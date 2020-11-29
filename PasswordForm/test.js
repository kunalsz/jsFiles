var obj = {
    name:['Kunal',"Tony"],
    age:[15,52]
}

var bj = [{name:"John",age:23},{name:"Peter",age:45}]

var what;
var te = "ko"


var testmore = (function(testn){
    for(i=0;i<bj.length;i++){
    if( testn === bj[i].name){
        what = "true"
        return
    }else{
        what = "false"
    }
    }
})(te);


//FOR EACH METHOD IS NOT WORKING









/* -----------------IT DOESN'T WORKS----------------------
bj.forEach(function(item,ID){
    if("John" === bj[ID].name){
        console.log("TRUE")
        return
    }else{
        console.log("FALSE")
    }
})
*/