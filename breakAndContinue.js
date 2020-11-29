// BREAK AND CONTINUE SCRIPT
var list = ["John","Smith",1990,"boy"];

for(var i=0;i<list.length; i++){
    if(typeof list[i] !== 'string'){         // 1990 SKIPPED
        continue
    }
    console.log(list[i])
}

for(var i=0;i<list.length; i++){
    if(typeof list[i] !== 'string'){            // AFTER 1990 THE PROCESS IS STOPPED
        break
    }
    console.log(list[i])
}