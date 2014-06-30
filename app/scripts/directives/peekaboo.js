//'use strict';
//
///**
// * @ngdoc directive
// * @name paperlessApp.directive:peekaboo
// * @description
// * # peekaboo
// */
//
//angular.module('paperlessApp')
//	.directive('peekaboo', function($timeout) {
//		return {
//			restrict: 'A',
//			scope   : {},
//			link    : function postLink(scope, element, attrs) {
//
//				var duration = Number(attrs.duration) || 600;
//				var $elem = $(element).hide().css({'opacity': 0});
//				var $targets = $(attrs.peekTarget);
//				var flag = [];       //used this flag to prevent multiple events being fired
//
//
//				//need a
//					$targets.each(function(i) {
//						$(this).on('appear', function() {
//							if(!flag[i]) {
//								flag[i] = true;
//								calc();
//							}
//
//						}).on('disappear', function() {
//							if(flag[i]) {
//								flag[i] = false;
//								calc();
//							}
//						}).appear();
//
//
//					});
//
//					$timeout(function(){
//						$targets.each(function(i){
//							flag[i] = $(this).is(':appeared');
//						});
//						calc();
//					}, 300);
//
//				//initial decision: when page loads decide to show/hide
////				$timeout(function() {
////					$targets.each(function(i) {
////						if($(this).is(':appeared')){
////							flag[i] = true;
////						} else {
////							flag[i] = false;
////						}
////					});
////					calc();
////				}, 300);
//
//				function calc() {
//
//					console.log(flag);
//
//					if(flag.every(function(f){
//						return !f;
//					})) {
//						show();
//					}
//					else {
//						hide();
//					}
//				}
//
//				function show() {
//					console.log('all targets gone');
//					$elem.show().stop().animate({
//						"opacity": 1
//					}, duration);
//				}
//
//				function hide() {
//					console.log('target/s visible');
//					$elem.stop().animate({
//						"opacity": 0
//					}, duration, function() {
//						$(this).hide();
//					});
//				}
//
//			}
//		};
//	});
