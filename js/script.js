$('.menu__burger').click(function(event) {
	$('.menu__burger,.header__menu').toggleClass('_active');
	$('body').toggleClass('_lock');
});
var header = $('.header__header');
$(window).scroll(function(event) {
	var scroll = $(window).scrollTop();
	if(scroll > 27) {
		header.addClass("_scrolled");
	} else if (scroll < 27 && $('.header__menu').hasClass('_active')) {
		header.css('margin', '10px 0px');
	}
	else {
		header.removeClass("_scrolled");
	}
});
var 
far = true;
function count() {
	$(window).scroll(function(event) {
		var
		cPos = $('.counter').offset().top,
		topWindow = window.pageYOffset;
		if (topWindow > cPos - 400 && far) {
			$('.counter__num').addClass('now');
			$('.counter__num').each(function () {
				$(this).prop('Counter',0).animate({
					Counter:$(this).text()
				},{
					duration: 2000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
				far = false;
			});
		}
	});
};
count();
var logo = $('.header__logo');
logo.click(function(event) {
	$('.menu__burger,.header__menu').removeClass("_active");
	$("body,html").animate({
		scrollTop:0
	}, 800);
});
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink =>{
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto)
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__header').offsetHeight;
			$('.menu__burger,.header__menu').removeClass("_active");
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}