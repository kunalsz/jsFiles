//CALCULATOR SCRIPT
//VERSION 1.0
console.log("This is a Calculator");
x = Number(prompt("Enter 1st num"));
y = Number(prompt("Enter 2nd num"));
console.log("First num "+x);
console.log("Secon num "+y);

console.log("Options available:-");
console.log("1.add","2.sub","3.mul","4.div");
choice  = prompt("Enter Your choice : ");

if(choice==1){
    console.log(x+y);
}else if(choice==2){
    console.log(x-y);
}else if(choice==3){
    console.log(x*y);
}else if(choice==4){
    console.log(x/y);
}else{
    alert("AN ERROR OCCURED")
}


// DONE !