var $navBtn = $('.nav-button');
var $nav = $('.navigation');

var $xButton = $('.x-button');

var $anchor = $('.anchor-graphic');
var $anchorButton = $('.anchor-button');

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

$anchorButton.on('click', function () {
	$anchor.toggleClass('anchor-drop');
});


