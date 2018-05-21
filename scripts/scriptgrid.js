$(document).ready(function(){
    $('button').click(function(){
    	var btnText = $(this).text();
        var btnName = $(this).attr('name');
        var divExample = $(this).parents('.codeblock').siblings('.example');

        if (btnName == 'grid-row-start' || 
        	btnName == 'grid-row-end' || 
        	btnName == 'grid-row' || 
        	btnName == 'grid-column-start' || 
        	btnName == 'grid-column-end' || 
        	btnName == 'grid-column' ||
        	btnName == 'grid-area' )


        	divExample.children(".example-grid-item").css(btnName, btnText); 

        else

        	divExample.css(btnName, btnText);





    });

});