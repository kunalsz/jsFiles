var what; // SO THAT IF THE RESULT IS EQUAL THE PROCESS STOPS


//THE MAIN FUNCTION
var main = (function(){
    //THE STORAGE OF THE DATA
    var Storage = [] 
    return{
        //check Function
        checkLogin:function(uname,pword){
            //TO CHECK THE LOGIN CREDENTIALS
            for(i=0;i<Storage.length;i++){
                if(uname === Storage[i].username && pword === Storage[i].password){
                    what = true
                    return
                }else{
                    what = false
                }
            }
        },
        //function for New Sign up
        newSignUP:function(arg){
            //To append the storage
            if(arg !== undefined){ //So 'undefined' does not adds to the list
                Storage.push(arg) 
            }else{
                //Do nothing
            }
            //return Storage //FOR CHECKING
            
        },

    }
})();

//GETTING THE INPUT
var getInput = (function(boss){
    //Event listener on the button = SignUp FOR SHOWING SIGN UP FORM
    var result; //FOR THE MULTIPLE ACCESS
    document.getElementById('signup').addEventListener('click',function(){
        //THE NEW INPUT FIELDS
        var htmlData = '<p>UserName:<input id="username"></p><p>Password:<input id="password" type="password"></p><p>Confirm Password:<input id="conPassword" type="password"></p><button id="conBtn">submitAndSignUp'
        
        //INSERTING THIS CODE THE MAIN PAGE
        document.getElementById('signup').insertAdjacentHTML('afterend',htmlData)
        
        //BUTTON TO CONFIRM SIGN UP
        document.getElementById('conBtn').addEventListener('click',function(){
            var username = document.getElementById('username').value 
            var password = document.getElementById('password').value
            var confPassword = document.getElementById('conPassword').value 
            //Sending this result to Storage in 'main'
            if(confPassword===password){ //FOR CHECK
                console.log("true") 
                result = { //An object to store the result from input
                username:username,
                password:password
                }
                boss.newSignUP(result) 
            }else{
                alert('Password does not matches ConfirmPassword')//ALERT MESSAGE
            }
            })
        
    })
    
    //LOGIN BUTTON
    document.getElementById('login').addEventListener('click',function(){
        //LOGIN FORM'S INPUT DATA
        var Lusername,Lpassword;
        Lusername = document.getElementById('usrnm').value
        Lpassword = document.getElementById('paswd').value
        //CHECKING IF THE USERNAME AND PASSWORD MATCHES OR NOT
        boss.checkLogin(Lusername,Lpassword)
        //IF STATEMENTS ARE HERE
        if(what===true){
            console.log("Access Granted")
        }else if(what===false){
            alert("Incorrect Username or Password")
        }
    })
    
    
})(main);








