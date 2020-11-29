/* ADD FUNCTION
function add(x,y){
    console.log(x+y);
}
add(4,5)
*/
function work(job){
    switch(job){
        case 'teacher':
            console.log("he is a teacher");
            break;
        case 'doctor':
            console.log("he is a doctor");
            break;
        default:
            console.log("error")
    }
}
work("doctor")