'use strict';

/**
 * @ngdoc directive
 * @name paperlessApp.directive:contactInfo
 * @description
 * # contactInfo
 */
angular.module('paperlessApp')
	.directive('contactInfo', function() {
		return {
			templateUrl: 'views/contact.html',
			restrict   : 'E',
			replace    : true,
			link       : function postLink(scope, element, attrs) {
			}
		};
	});
