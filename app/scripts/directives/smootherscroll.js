'use strict';

/**
 * @ngdoc directive
 * @name paperlessApp.directive:smootherScroll
 * @description
 * # smootherScroll
 */
angular.module('paperlessApp')
	.directive('smootherScroll', function() {
		return {restrict: "A", link: function(scope, elem, attrs) {
			return elem.bind("click", function() {
				var a, duration, target;
				return attrs.target ? (a = +attrs.offset || 100, target = $("#" + attrs.target), duration = +attrs.speed || 500, $("html,body").animate({scrollTop: target.offset().top - a}, duration)) : $("html,body").animate({scrollTop: 0}, duration)
			})
		}}
	});
