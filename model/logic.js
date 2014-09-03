/**
 * Created by sajan on 1/9/14.
 */

var calculate = {

    howMuchSpent:function(spent,total){
        var amount = spent / total;
        return amount * 100;
    },
    amount:function (amount) {

     amount = amount.substring(1);
     var val = amount.split(',');
     amount = val[0] + val[1];

    return parseInt(amount);
   },
   incomeOrExpenses:function(key){
       var type = key.split('.');
       return type;
   }


}

module.exports = calculate;