$(document).ready(function(){
    $('button').click(function(){
    	var btnText = $(this).text();
        var btnName = $(this).attr('name');
        var divExample = $(this).parents('.codeblock').siblings('.example');

         if (btnName == 'grid-row-start' || btnName == 'grid-row-end' || btnName == 'grid-row'){
            divExample.children(".example-grid-item").css(btnName, btnText);

        divExample.css(btnName, btnText);

    }




    });

});