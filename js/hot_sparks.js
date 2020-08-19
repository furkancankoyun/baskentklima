// wrap LAST word in span so we can style it
jQuery('.list_carousel h3, .blog-featured h1').each(function(){

    var text = jQuery(this).text().split(' ');
    if(text.length < 1)
        return;

    text[text.length - 1] = '<span>'+text[text.length - 1]+'</span>';

    jQuery(this).html( text.join(' ') );

});

// wrap FIRST word in span so we can style it
jQuery('.featuresrow h3').each(function(){

    var text = jQuery(this).text().split(' ');
    if(text.length < 1)
        return;

    text[0] = '<span>'+text[0]+'</span>';

    jQuery(this).html( text.join(' ') );

});

// back to top link
jQuery(".mp_footer a").click(function(event){
event.preventDefault();
	try{
	jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top}, 800);
	}catch(e){
	jQuery('html,body').animate({scrollTop:0}, 800);
	}
});

// no padding if article-info

if (jQuery('dl.article-info').length) {
    jQuery('.item-page h2').css('padding-bottom', 0)
}