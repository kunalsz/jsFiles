//Challenge 4
/*
var tips = {
    tip : [124,48,268,180,42],
    tip_now : [],
    tip_calculator : function(){
        for(var i = 0;i<this.tip.length;i++){
            if(this.tip[i] < 50){
                this.tip_now = this.tip[i] * 0.2
                return this.tip_now
            }else if(this.tip[i] > 50 && this.tip < 200){
                this.tip_now = this.tip[i] * 0.15
                return this.tip_now
            }else if(this.tip > 200){
                this.tip_now = this.tip[i] * 0.1
                return this.tip_now
            }else{
                continue
            }
        }
    }
}

tips.tip_calculator()
---------- FAILED---------
*/
var John = {
    bills : [124,48,268,180,42],
    tip : [],
    total : [],
    tip_calc  : function(){
        for(var i =0;i< this.bills.length; i++){
            if(this.bills[i] < 50){
                this.tip[i] = this.bills[i]  * 0.2
                this.total[i] = this.bills[i] + this.tip[i]
            }else if(this.bills[i]>50 && this.bills[i] <200){
                this.tip[i] = this.bills[i] * 0.15
                this.total[i] = this.bills[i] + this.tip[i]
            }else if(this.bills[i] > 200){
                this.tip[i] = this.bills[i] * 0.1
                this.total[i] = this.bills[i] + this.tip[i]
            }
        }
    }
}


var Mark = {
    bills : [77,375,110,45],
    tip : [],
    total : [],
    tip_calc  : function(){
        for(var i =0;i< this.bills.length; i++){
            if(this.bills[i] < 100){
                this.tip[i] = this.bills[i]  * 0.2
                this.total[i] = this.bills[i] + this.tip[i]
            }else if(this.bills[i]>100 && this.bills[i] <300){
                this.tip[i] = this.bills[i] * 0.1
                this.total[i] = this.bills[i] + this.tip[i]
            }else if(this.bills[i] > 300){
                this.tip[i] = this.bills[i] * 0.25
                this.total[i] = this.bills[i] + this.tip[i]
            }
        }
    }
}



Mark.tip_calc()
console.log(Mark.tip)
John.tip_calc()
console.log(John.tip)

var sum = 0
function mark_average(){
    for(var i = 0;i < Mark.tip.length;i++){
        sum = sum + Mark.tip[i]
    }
}

var sum_next =0 
function john_average(){
    for(var i = 0;i < John.tip.length;i++){
        sum_next = sum_next + John.tip[i]
    }
}

mark_average()
john_average()

var mark_average_half  = sum/2
var john_average_half  = sum_next/2

console.log(mark_average_half)
console.log(john_average_half)



////-------- PASSED-------------------------------




























