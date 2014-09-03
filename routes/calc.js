var express = require('express');
var router = express.Router();
var precentage = require('../model/logic');


/* GET users listing. */
router.get('/', function(req, res) {
   res.render('calculate.html');
});

router.post('/',function(req,res){



    var totalincome = 0;
    var totalshelter = 0;
    var totaltransportation = 0;
    var totalfoodandclothing = 0;
    var totalhealth = 0;
    var totalrecreation = 0;
    var totaleducation = 0;
    var totalother = 0;

    var expensesArray = ['Shelter', 'Transportation', 'Food & Clothing', 'Health and Personal care', 'Recreation', 'Education', 'Other Expenses'];
    for(var key in req.body) {
        //console.log('key :' + "==" + key + " and " + "value :" + "==" + req.body[key]);

        //console.log(precentage.incomeOrExpenses(key) + "key logged");


        if(req.body[key] != ""){
           var type = precentage.incomeOrExpenses(key)[0];
              switch (type){
                  case "income":
                      console.log('coming income');
                      totalincome = totalincome + precentage.amount(req.body[key]);
                      break;
                  case "shelter":
                      console.log('coming shelter');
                      totalshelter = totalshelter + precentage.amount(req.body[key]);

                      break;
                  case "transportation":
                       totaltransportation = totaltransportation + precentage.amount(req.body[key]);

                      break;
                  case "food":
                       totalfoodandclothing = totalfoodandclothing + precentage.amount(req.body[key]);
                      break;
                  case "health":
                       totalhealth = totalhealth + precentage.amount(req.body[key]);
                      break;
                  case "recreation":
                      totalrecreation = totalrecreation + precentage.amount(req.body[key]);
                      break;
                  case "education":
                      totaleducation = totaleducation + precentage.amount(req.body[key]);
                      break;
                  case "other":
                      totalother = totalother + precentage.amount(req.body[key]);
                      break;
              }
        }
    }

    console.log(totalincome + " total income");
    console.log(totalshelter + "total shelter");
    console.log(totaltransportation + "total transportation");
    console.log(totalfoodandclothing + "total food and clothing");
    console.log(totalhealth + "total health");
    console.log(totalrecreation + "total recreation");
    console.log(totaleducation + "total education");
    console.log(totalother + "total other expenses");

    var totalexpenses = totalshelter + totaleducation + totalfoodandclothing + totalhealth + totalother + totalrecreation + totaltransportation;
    var currency = "$";
    var percentagesym = "%";
    var data = {}

    if(totalexpenses > totalincome)
    {
        data.totalincome =   "unable to calculate due to wrong information provided/ your total expenses is greater than your total income";
        data.totalexpenses = "unable to calculate due to wrong information provided / your total expenses is greater than your total income";
        data.expensespent =  "unable to calculate due to wrong information provided / your total expenses is greater than your total income";
        data.remain = "unable to calculate due to wrong information provided / your total expenses is greater than your total income";
        data.prec = "unable to calculate due to wrong information provided / your total expenses is greater than your total income";

    }else if(totalincome <= 0){
        data.totalincome =   "please provide your source of income";
        data.totalexpenses = "please provide your source of income";
        data.expensespent =  "please provide your source of income";
        data.remain = "please provide your source of income";
        data.prec = "please provide your source of income";

    }
    else {
        data.totalincome = totalincome;
        data.totalexpenses = totalexpenses;
        data.expensespent = precentage.howMuchSpent(totalexpenses, totalincome) + percentagesym;
        var balance = totalincome - totalexpenses;
        var prec = precentage.howMuchSpent(balance, totalincome) + percentagesym;
        data.remain = balance;
        data.prec = prec;
    }

    data.expenses = expensesArray;
    data.spent = [];


        data.spent[0] =  precentage.howMuchSpent(totalshelter, totalincome) + percentagesym;


        data.spent[1] =  precentage.howMuchSpent(totaltransportation, totalincome) + percentagesym;


        data.spent[2] =  precentage.howMuchSpent(totalfoodandclothing, totalincome) +  percentagesym;

           data.spent[3] =  precentage.howMuchSpent(totalhealth,totalincome) + percentagesym


        data.spent[4] =  precentage.howMuchSpent(totalrecreation, totalincome) + percentagesym;


        data.spent[5] =  precentage.howMuchSpent(totaleducation, totalincome) + percentagesym;


        data.spent[6] = precentage.howMuchSpent(totalother, totalincome) + percentagesym;


    res.render('calculate.html', {value:data});

});




module.exports = router;
