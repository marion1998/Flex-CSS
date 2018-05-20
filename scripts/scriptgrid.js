$(document).ready(function(){
    $('button').click(function(){
    	var btnText = $(this).text();
        var btnName = $(this).attr('name');
        var divExample = $(this).parents('.codeblock').siblings('.example');

        divExample.css(btnName, btnText);




    });

});