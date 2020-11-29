//JS FILECREATED ON 9/11/2019

var InputData = (function(){ 
    var htmlData = '<div><h2 id="">data</h2><div>' // THE HTML CODE IN STRING
    return{
        mainFunc:function(arg){   //THE FUNC TAKES AN ARG THAT IS THE INPUT
            var newHtmlData;
            newHtmlData = htmlData.replace('data',arg) //REPLACING %data% WITH THE INPUT
            document.getElementById('shower').insertAdjacentHTML('beforeend',newHtmlData) //ALTERING THE HTML CODE
            
        }
    }
})();

var showData = (function(maininput){ 
    document.getElementById('btn').addEventListener('click',function(){
        var name = document.getElementById('nameInput').value // STORING THE INPUT
        maininput.mainFunc(name) // CALLING THE mainFunc ON name
        
    })
})(InputData);




