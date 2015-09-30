var TemplateModule = (function () {

	function scrollToTarget(element, target) {
		bk$(element).click(function(e) {
			e.preventDefault();
			bk$('html, body').animate({
				'scrollTop': bk$(target).offset().top
			});
		});
	}

	function toggleMenuChildren() {
		bk$('.js-menu-list .item-name--parent').click(function() {
			bk$(this).next('.navigation-list--children').slideToggle('fast');
		});
	}

	return {
		scrollToTarget: scrollToTarget,
		toggleMenuChildren: toggleMenuChildren
	};
	
})();

TemplateModule.scrollToTarget('#template-feature button, #template-map button', '[name="cta-contact"]');
TemplateModule.toggleMenuChildren();