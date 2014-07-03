'use strict';

/**
 * @ngdoc directive
 * @name paperlessApp.directive:slider
 * @description
 * # slider
 */
angular.module('paperlessApp')
  .directive('slider', function () {
    return {
      restrict: 'AE',
	  templateUrl: 'views/slider.html',
	  scope: {
		  images : '='
	  },
      link: function postLink() {
      }
    };
  });
