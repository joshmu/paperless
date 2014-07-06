'use strict';

/**
 * @ngdoc directive
 * @name paperlessApp.directive:slider
 * @description
 * # slider
 */
angular.module('paperlessApp')
    .directive('alliances', function() {
        return {
            restrict: 'AE',
            templateUrl: 'views/alliances.html',
            scope: {
                images: '='
            },
            link: function postLink() {}
        };
    });
