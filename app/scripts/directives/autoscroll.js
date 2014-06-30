//'use strict';
//
//// TODO: AUTOSCROLL DIRECTIVE NOT WORKING!
//
///**
// * @ngdoc directive
// * @name paperlessApp.directive:autoscroll
// * @description
// * # autoscroll
// */
//angular.module('paperlessApp')
//	.directive('autoscroll', function($location, $anchorScroll) {
//		return {
//			restrict: 'A',
//			link    : function postLink(scope, element, attrs) {
//
//				var route, $target;
//
//				if(attrs.autoscroll === 'list') {
//
//					//find all links
//					$(element).find('a').each(function() {
//						//anchors
//						$(this).parent().click(function() {
//							//list items
//							//find route
//							route = $(this).find('a').attr('href');
//							changeLoc(route);
//						});
//					});
//
//				} else {
//					//detect if elem is anchor if not then find anchor child
//					if($(elem).is('a')) {
//						$target = $(elem);
//						route = $target.attr('href');
//					} else {
//						$target = $(elem).find('a').eq(0);
//						route = $target.find('a').attr('href');
//					}
//
//					$target.click(function() {
//						changeLoc(route);
//					});
//				}
//
//				function changeLoc(route) {
//					//change location
//					$location.hash(route);
//					//scroll
//					$anchorScroll();
//
//				}
//
//			}
//		};
//	});
