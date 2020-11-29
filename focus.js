var Focus = (function(){
    var currentName = document.getElementById('name')
    return{
        fcusmthd : function(){
            currentName.focus()
        }
    }
})();

var runner = (function(kk){
    Focus.fcusmthd()
})(Focus)