'use strict';

/**
 * @ngdoc directive
 * @name paperlessApp.directive:navShow
 * @description
 * # navShow
 */
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
					}
					appear = true;

				}).on('disappear', function() {
					//show nav
					if(appear !== false) {
						show();
					}
					appear = false;

				}).appear();  //bug? needed to call appear before events kicked in?

				//initial decision: when page loads decide to show/hide
				$timeout(function() {
					$('#banner').is(':appeared') ? hide() : show();
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
			}
		};
	});
