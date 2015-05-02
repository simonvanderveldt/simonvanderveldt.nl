$('.morebtn').click(function(){
    $(this).next().slideToggle();
    if ($(this).html() == 'more...') {
    	$(this).html('less...')        
    }
    else {
        $(this).html('more...')
    }
    return false;
});