var $navBtn = $('.nav-button');
var $nav = $('.navigation');

var $xButton = $('.x-button');

$navBtn.on('click', function () {
	$nav.addClass('navigation-open');
});

$navBtn.on('click', function () {
	$navBtn.addClass('nav-none');
});

$xButton.on('click', function () {
	$nav.toggleClass('navigation-open');
});

$xButton.on('click', function () {
	$navBtn.toggleClass('nav-none');
});


