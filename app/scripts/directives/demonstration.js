'use strict';

/**
 * @ngdoc directive
 * @name paperlessApp.directive:demonstration
 * @description
 * # demonstration
 */
angular.module('paperlessApp')
    .directive('demonstration', function() {
        return {
            templateUrl: '../views/demonstration.html',
            replace: true,
            restrict: 'E',
            link: function postLink() {}
        };
    });
