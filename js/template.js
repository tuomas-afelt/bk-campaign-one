var TemplateModule = (function ($) {

	function scrollToTarget(element, target) {
		$(element).click(function(e) {
			e.preventDefault();
			$('html, body').animate({
				'scrollTop': $(target).offset().top
			});
		});
	}

	function toggleMenuChildren() {
		$('.js-menu-list .item-name--parent').click(function() {
			$(this).next('.navigation-list--children').slideToggle('fast');
		});
	}

	return {
		scrollToTarget: scrollToTarget,
		toggleMenuChildren: toggleMenuChildren
	};
	
})(jQuery);

TemplateModule.scrollToTarget('#template-feature button, #template-map button', '[name="cta-contact"]');
TemplateModule.toggleMenuChildren();