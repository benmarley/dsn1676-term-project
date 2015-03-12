var $navBtn = $('.nav-button')
var $nav = $('.navigation')

$navBtn.on('click', function () {
	$nav.toggleClass('navigation-open');
});