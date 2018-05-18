$(document).ready(function(){
    $('button').click(function(){
        var btnText = $(this).text();
        var btnName = $(this).attr('name');
        var divExample = $(this).parents('.code').siblings('.exemple');

        if(btnName == 'order'){
            divExample.children("#main-order-item").css(btnName, btnText);
            divExample.children("#main-order-item").children("p").text(btnText);
        }else{
            divExample.css(btnName, btnText);
        }
        
    })
});