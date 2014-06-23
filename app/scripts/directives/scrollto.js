'use strict';

/**
 * @ngdoc directive
 * @name paperlessApp.directive:scrollTo
 * @description
 * # scrollTo
 */
angular.module('paperlessApp')

.directive('scrollTo', function(){
	return {
		restrict : "A",
		link: function(scope, elem, attrs){
			//attrs: smoother-scroll=target, offset=offset, speed=duration

			elem.on('click', function(){
				var offset, duration, $target;

				var config = {
					speed: 1000,
					offset: 70,
					target: attrs.scrollTo
				};

				duration = +attrs.speed || config.speed;

				if(config.target) {

					offset = +attrs.offset || config.offset;
					$target = $("#" + config.target);

					$("html,body").animate({
						scrollTop: $target.offset().top - offset
					}, duration);

				} else {
					$("html,body").animate({
						scrollTop: 0
					}, duration);
				}
			});
		}
	}
});