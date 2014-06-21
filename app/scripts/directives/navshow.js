'use strict';

/**
 * @ngdoc directive
 * @name paperlessApp.directive:navShow
 * @description
 * # navShow
 */

// TODO: modularize so i can use it for any elem
angular.module('paperlessApp')
	.directive('navShow', function($timeout) {
		return {
			restrict: 'A',
			link    : function postLink(scope, element, attrs) {
				var duration = Number(attrs.duration) || 600;

				var $nav = $(element);
				var appear;       //used this flag to prevent multiple events being fired

				$('#banner').on('appear', function() {
					//hide nav
					if(appear !== true) {
						hide();
						hide2(); //TODO: HACK
					}
					appear = true;

				}).on('disappear', function() {
					//show nav
					if(appear !== false) {
						show();
						show2(); //TODO: HACK
					}
					appear = false;

				}).appear();  //bug? needed to call appear before events kicked in?

				//initial decision: when page loads decide to show/hide
				$timeout(function() {
					$('#banner').is(':appeared') ? hide() : show();
					$('#banner').is(':appeared') ? hide2() : show2();
				}, 300);

				function show() {
					$nav.show().stop().animate({
						"opacity": 1
					}, duration);
				}

				function hide() {
					$nav.stop().animate({
						"opacity": 0
					}, duration, function() {
						$(this).hide();
					});
				}

				function show2() {
					$('.back-top').show().stop().animate({
						"opacity": 1
					}, duration);
				}

				function hide2() {
					$('.back-top').stop().animate({
						"opacity": 0
					}, duration, function() {
						$(this).hide();
					});
				}

			}
		};
	});
