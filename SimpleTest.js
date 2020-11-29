var MarkH,MarkM,MarkBmi,JohnM,JohnH,JohnBmi;
MarkH = 150;
MarkM = 60;
JohnH = 160;
JohnM = 30;
JohnBmi = JohnM / (JohnH*JohnH);
MarkBmi = MarkM / (MarkH*MarkH);
var compare = MarkBmi > JohnBmi;
console.log("Is mark's bmi more than john's "+compare)