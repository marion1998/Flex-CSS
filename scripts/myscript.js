$(document).ready(function(){
    $('button').click(function(){
        var btnText = $(this).text();
        var btnName = $(this).attr('name');
        var divExample = $(this).parents('.code').siblings('.exemple');

        divExample.css('color', 'red');
        divExample.css(btnName, btnText);
    })
});