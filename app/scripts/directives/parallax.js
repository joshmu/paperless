'use strict';

/**
 * @ngdoc directive
 * @name paperlessApp.directive:parallax
 * @description
 * # parallax
 */
/* global $ */

angular.module('paperlessApp')
	.directive('parallax', function() {
		return {
			restrict: 'A',
			link    : function postLink(scope, element, attrs) {

				var $elem = $(element); // assigning the object

				var $window = $(window);

				var offset = +attrs.parallaxOffset || 0;

//				var diff = $window.scrollTop() - $elem.offset().top;

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

				//TODO: CREATE BACK TO TOP BUTTON!

				//REMOVE OFFSET VAR, WORK OUT MINIMUM WITH PARA AT 1 (NO PARA), ON SCREEN RESIZE, IF NOT WORKING STILL THIS IS THE POINT TO DISABLE
				//FOR NOW USER CAN CHANGE THE IMAGE
				//THEN LOOK AT REINTEGRATING OFFSET IN

				//TODO: listen for screen resize and recalc offset
				//TODO: NEED TO REMOVE OFFSET OPTION AND CREATE FUNC TO CALC MIN PARALLAX AND MAX

				//TODO: hack to prevent parallax on smaller screens unless very tall images... needs work!
				//prevent on smaller screens, only works on initial load
				if($window.width() < 992) {
					parallax = 0;
					offset = 0;
				}
				//check on window resize, this only works one way when screen size is minified
				//parallax is not turned back on when screen size is increased
				$($window).resize(function(){
					if($window.width() < 992 && parallax !== 0) {
						parallax = 0;
						offset = 0;
						console.log('turning parallax off');
						$elem.css({ backgroundPosition : '50% 0px'});
					}
				});

				$window.scroll(function() {
					var heightPos = $window.scrollTop() - $elem.offset().top;

					var yPos = -(heightPos / parallax) - offset;

					// Put together our final background position
					var coords = '50% ' + yPos + 'px';

					// Move the background
					$elem.css({ backgroundPosition: coords });
				});

			}
		};
	});
