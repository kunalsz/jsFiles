//chalange
var johnScore = (89+120+103)/3;
var mikeScore = (116+94+123)/3;
var maryScore = (97+134+105)/3;
if(johnScore>(mikeScore && maryScore)){            // 2 BRACKETS AS WE WANT TO COMPARE ONE SCORE WITH TWO SCORES 
    console.log("The winner is john "+johnScore);
}else if(mikeScore>(johnScore && maryScore)){
    console.log("The winner is mike "+mikeScore)
}else if(maryScore>(johnScore && mikeScore)){
    console.log("The winner is mary "+maryScore)
}else{
    console.log("same score")
}

// SUCCESS