$(document).ready(function(){
    $('#design').click(function(){
        $('#design').toggle(1000);
        $('.design-text').toggle(1000);
    });
    $('.design-text').click(function(){
        $('#design').toggle(1000);
        $('.design-text').toggle(1000);
    });
});

