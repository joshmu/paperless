'use strict';

/**
 * @ngdoc directive
 * @name paperlessApp.directive:parallax
 * @description
 * # parallax
 */
angular.module('paperlessApp')
	.directive('parallax', function() {
		return {
			restrict: 'A',
			link    : function postLink(scope, element, attrs) {

				var $elem = $(element); // assigning the object

				var $window = $(window);

				$window.scroll(function() {

					var yPos = (($window.scrollTop() - $elem.offset().top) / attrs.parallax) + (+attrs.parallaxoffset || 0);

					// Put together our final background position
					var coords = '50% ' + yPos + 'px';

					// Move the background
					$elem.css({ backgroundPosition: coords });
				});

			}
		};
	});
