jQuery(document).ready(function() {
	jQuery('.tabs').tabs();
	jQuery('.description-logo ul li:odd').addClass('align-right');
	jQuery('.description-logo ul li:even').addClass('align-left');

	jQuery('a.btn-toggle').click(function(even){
		even.preventDefault();
		jQuery('.general .navigation > ul').slideToggle();
	});

	jQuery('html').click(function(even){
		if(jQuery(window).width() <= 1023){
			if(jQuery(even.target).closest('.general .navigation').length == 0){
				jQuery('.general .navigation ul').slideUp();
			}
			if(jQuery(even.target).closest('.navigation-footer .col-footer').length == 0){
				jQuery('.navigation-footer .col-footer h5').next().slideUp();
			}
		}
	});

	jQuery('.general .navigation ul li a').click(function(even){
		if(jQuery(this).next('ul').length != 0){
			if(!jQuery(this).hasClass('active')){
				even.preventDefault();
				jQuery(this).addClass('active').parent().siblings().find('a').removeClass('active');
				jQuery(this).next('ul').slideDown();
			}
		}
	});

	jQuery('.navigation-footer .col-footer h5').click(function(){
		jQuery(this).toggleClass('active');
		jQuery(this).next().slideToggle();
		jQuery('.navigation-footer .col-footer').not(jQuery(this).parent()).find('h5').removeClass('active').next().slideUp();
	});
});

jQuery(window).resize(function(){
	if(jQuery(window).width() >=1024){
		jQuery('.general .navigation ul').css('display','inline-block');
	}
	else{
		jQuery('.general .navigation ul').css('display','none');
	}
});


(function($){
	$.fn.tabs = function(){
		var tabs = this;
		
		if(tabs.length == 0) return tabs;
		
		tabs.find('.tab-title a').click(function(event){
			event.preventDefault();
			var id = $(this).attr('rel');
			tabs.find('.tab-title .active').removeClass('active');
			tabs.find('.tab-content').hide().filter('#' + id).show();
			$(this).addClass('active');
		});
		
		tabs.find('.tab-content').hide().filter('#' + tabs.find('.tab-title .active').attr('rel')).show();
		
		return this;
	}
})(jQuery);