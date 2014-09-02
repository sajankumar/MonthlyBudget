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
    for(var key in req.body){
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

    var currency = "$";
    var percentagesym = "%";
    var data = {}
    data.totalincome = "Total Income : " + currency + totalincome;
    data.expenses = expensesArray;
    data.spent = [];


        data.spent[0] = percentagesym + precentage.howMuchSpent(totalshelter, totalincome);


        data.spent[1] = percentagesym +precentage.howMuchSpent(totaltransportation, totalincome);


        data.spent[2] = percentagesym + precentage.howMuchSpent(totalfoodandclothing, totalincome);

           data.spent[3] = percentagesym + precentage.howMuchSpent(totalhealth,totalincome);


        data.spent[4] =percentagesym + precentage.howMuchSpent(totalrecreation, totalincome);


        data.spent[5] =percentagesym + precentage.howMuchSpent(totaleducation, totalincome);


        data.spent[6] =percentagesym+ precentage.howMuchSpent(totalother, totalincome);


    res.render('calculate.html', {value:data});

});




module.exports = router;
