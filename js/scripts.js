$(document).ready(function(){
    $('#design').click(function(){
        $('#design').toggle(2000);
        $('.design-text').toggle(2000);
    });
    $('.design-text').click(function(){
        $('#design').toggle(2000);
        $('.design-text').toggle(2000);
    });
});
$(document).ready(function(){
    $('#development').click(function(){
        $('#development').toggle(2000);
        $('.development-text').toggle(2000);
    });
    $('.development-text').click(function(){
        $('#development').toggle(2000);
        $('.development-text').toggle(2000);
    });
});
$(document).ready(function(){
    $('#product').click(function(){
        $('#product').toggle(2000);
        $('.product-text').toggle(2000);
    });
    $('.product-text').click(function(){
        $('#product').toggle(2000);
        $('.product-text').toggle(2000);
    });
});
$(document).ready(function(){
    $('#work1').mouseover(function(){
        $('#top1').show();
    }).mouseout(function(){
        $('#top1').hide();
    })

});
$(document).ready(function(){
    $('form#validity').submit(function(){
        var name = $('input#smile1').val();
        var email = $('input#smile2').val();
        var message = $('input#textarea').val();
        if (name && email){
            alert (name + ', we have recived your message. Thank you for contacting us ');
        }else {
            alert('Please enter your name and email');
        }
    });
});

