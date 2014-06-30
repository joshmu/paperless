//'use strict';
//
///**
// * @ngdoc directive
// * @name paperlessApp.directive:navShow
// * @description
// * # navShow
// */
//
//// TODO: modularize so i can use it for any elem
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
