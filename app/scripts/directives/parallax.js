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

				var offset = +attrs.parallaxOffset || 0;

				var diff = $window.scrollTop() - $elem.offset().top;

				var parallax = +attrs.parallax;

//				var maxOffset = ($window.height() - ($elem.height() * attrs.parallax)) / attrs.parallax;
//				var maxOffset = ($window.height()+($elem.height()*attrs.parallax)) / $elem.height();
//
//				console.log('window height is:', $window.height());
//				console.log('element height is:', $elem.height());
//
//				console.log('offset chosen is:', offset);
//				console.log('max offset is:', maxOffset);
//
//				offset = offset > maxOffset ? maxOffset : offset;
//
//				console.log('offset will be:', offset);
//	    		console.log('max offset is:', maxOffset);

				//TODO: listen for screen resize and recalc offset
				//TODO: NEED TO REMOVE OFFSET OPTION AND CREATE FUNC TO CALC MIN PARALLAX AND MAX

				//TODO: hack to prevent parallax on smaller screens unless very tall images... needs work!
				//prevent small
				if($window.width() < 767) {
					parallax = 0;
					offset = 0;
				}

				$window.scroll(function() {
					var heightPos = $window.scrollTop() - $elem.offset().top;

					var yPos = (heightPos / parallax) - offset;

					// Put together our final background position
					var coords = '50% ' + yPos + 'px';

					// Move the background
					$elem.css({ backgroundPosition: coords });
				});

			}
		};
	});
