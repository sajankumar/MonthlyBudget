/**
 * Created by sajan on 31/8/14.
 */

var currencytype = ['&#36;', '&euro;', '&#x20B9;'];
var currency = 0;

function keypresshandler(event)
{
    var charCode = event.keyCode;
    //Non-numeric character range
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
}

$(document).ready(function(){

    $('.input-list').on('change',function(){

        var c_val = $(this).val();
        var list = $('#currency');
        var c_picked = $(list).find("option[value='"+ c_val +"']");
        currency = $(c_picked).attr('id');
    });

    $("input[type='text']").focusout( function(){

         if($(this).val() !="" && $(this).val().charAt(0) != "$"){
             var am =  '$' + $(this).val()
             var amount = $(this).val(am);

         }

     })

     $('#calculate').on('click', function(event){

         $.post('http://localhost:3000/calculate', {type:'income', options:[{

             "GrossSalaries" : $("input[name='grosssalaries']").val(),
             "Pensions&Allowances" : $("input[name='pensionallowances']").val(),
             "InterestIncome" : $("input[name='interestincome']").val(),

             "RealEstateIncome" : $("input[name='realestateincome']").val(),
             "OtherIncome" : $("input[name='otherincome']").val(),
             "LoanAdvances" : $("input[name='loanadvances']").val()

         }]}, function(success,fail){
                alert(success.data[0].GrossSalaries);


         });

     })



});

