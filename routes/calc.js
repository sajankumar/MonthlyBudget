var express = require('express');
var router = express.Router();
var precentage = require('../model/logic');


/* GET users listing. */
router.get('/', function(req, res) {
   res.render('calculate.html');
});

router.post('/',function(req,res){

  res.render('calculate.html', {value:'sajankumar post'})
    console.log('data' + "===" + req.body);

    var totalincome = 0;
    var totalshelter = 0;


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
              }
        }
    }
    console.log(totalincome + " total income");
    console.log(totalshelter + "total shelter");


});




module.exports = router;
