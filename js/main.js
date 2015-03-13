var $navBtn = $('.nav-button')
var $nav = $('.navigation')

$navBtn.on('click', function () {
	$nav.addClass('navigation-open');
});

$navBtn.on('click', function (){
	$navBtn.addClass('nav-none')
});

