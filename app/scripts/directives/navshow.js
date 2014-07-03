'use strict';

/**
* @ngdoc directive
* @name paperlessApp.directive:navShow
* @description
* # navShow
*/
/* global $ */

angular.module('paperlessApp')
	.directive('navShow', function($window){
		return {
			restrict : 'A',
			scope : {
				navShow : '='
			},
			link : function(scope, elem, attrs) {
				//fade in the nav when the banner is not visible
				var config = {
					//calc banner height > which is always window.innerHeight
					diff : attrs.navShowDiff || $window.innerHeight,
					//optional offset > to cater for nav height
					offset : attrs.navShowOffset || 0
				};

				//presume banner always shows first on load
				scope.navShow = false;

				$(window).scroll(function(){
					//when user scrolls check if not over banner
//					console.log('target would be', config.diff);
//					console.log($window.scrollY);

					if($window.scrollY < config.diff) {
						if(scope.navShow) {
							console.log('hide nav');
							scope.navShow = false;
						}
					} else {
						if(!scope.navShow) {
							console.log('show nav');
							scope.navShow = true;
						}
					}
				});

				//animate nav in & out

				//this should trigger on screen resize
			}
		};
	});












// TODO: modularize so i can use it for any elem
//angular.module('paperlessApp')
//	.directive('navShow', function($timeout) {
//		return {
//			restrict: 'A',
//			link    : function postLink(scope, element, attrs) {
//				var duration = Number(attrs.duration) || 600;
//
//				var $nav = $(element);
//				var $backTop = $('.back-top');
//				var appear;       //used this flag to prevent multiple events being fired
//
//				$('#banner').on('appear', function() {
//					//hide nav
//					if(appear !== true) {
//						hide();
//					}
//					appear = true;
//
//				}).on('disappear', function() {
//					//show nav
//					if(appear !== false) {
//						show();
//					}
//					appear = false;
//
//				}).appear();  //bug? needed to call appear before events kicked in?
//
//				//initial decision: when page loads decide to show/hide
//				$timeout(function() {
//					var x = $('#banner').is(':appeared');
//					x ? hide() : show();
//				}, 300);
//
//				function show() {
//					showNav();
//					showBackTop();
//				}
//
//				function hide() {
//					hideNav();
//					hideBackTop();
//				}
//
//				function showNav() {
//					$nav.show().stop().animate({
//						"opacity": 1
//					}, duration);
//				}
//
//				function hideNav() {
//					$nav.stop().animate({
//						"opacity": 0
//					}, duration, function() {
//						$(this).hide();
//					});
//				}
//
//				function showBackTop() {
//					$backTop.show().stop().animate({
//						"opacity": 1
//					}, duration);
//				}
//
//				function hideBackTop() {
//					$backTop.stop().animate({
//						"opacity": 0
//					}, duration, function() {
//						$(this).hide();
//					});
//				}
//
//			}
//		};
//	});
