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
    $('#work2').mouseover(function(){
        $('#top2').show();
    }).mouseout(function(){
        $('#top2').hide();
    })

});
$(document).ready(function(){
    $('#work3').mouseover(function(){
        $('#top3').show();
    }).mouseout(function(){
        $('#top3').hide();
    })

});
$(document).ready(function(){
    $('#work4').mouseover(function(){
        $('#top4').show();
    }).mouseout(function(){
        $('#top4').hide();
    })

});
$(document).ready(function(){
    $('#work5').mouseover(function(){
        $('#top5').show();
    }).mouseout(function(){
        $('#top5').hide();
    })

});
$(document).ready(function(){
    $('#work6').mouseover(function(){
        $('#top6').show();
    }).mouseout(function(){
        $('#top6').hide();
    })

});
$(document).ready(function(){
    $('#work7').mouseover(function(){
        $('#top7').show();
    }).mouseout(function(){
        $('#top7').hide();
    })

});
$(document).ready(function(){
    $('#work8').mouseover(function(){
        $('#top8').show();
    }).mouseout(function(){
        $('#top8').hide();
    })

});
$(document).ready(function(){
    $('form#validity').submit(function(){
        var name = $('input#mce-NAME').val();
        var email = $('input#mce-EMAIL').val();
        var message = $('input#textarea').val();
        if (name && email){
            alert (name + ', we have recived your message. Thank you for contacting us ');
        }else {
            alert('Please enter your name and email');
        }
    });
});

