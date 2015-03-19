var $navBtn = $('.nav-button');
var $nav = $('.navigation');

var $xButton = $('.x-button');

var $anchor = $('.anchor-graphic');
var $anchorButton = $('.anchor-button');

var $exploreButton = $('.explore-button')
var $shipWheel = $('.ship-wheel')

var $paraButton = $('.submarine');
var $scope = $('.scope')

var $subEnter = $('.sub-enter');
var $subContain = $('.sub-container')

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

$exploreButton.on('click', function () {
	$shipWheel.toggleClass('wheel-graphic-animate');
});

$paraButton.on('click', function () {
	$scope.toggleClass('scope-up');
});

$subEnter.on('click', function () {
	$subContain.toggleClass('sub-container-enter');
});