/**
 * Created by sajan on 1/9/14.
 */

var calculate = {

    howMuchSpent:function(spent,total){
        var amount = spent / total;
        return amount * 100;
    },
    amount:function (amount) {

    return parseInt(amount.substring(1));
   },
   incomeOrExpenses:function(key){
       var type = key.split('.');
       return type;
   }


}

module.exports = calculate;