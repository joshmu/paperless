'use strict';

/**
 * @ngdoc directive
 * @name paperlessApp.directive:resume
 * @description
 * # resume
 */
angular.module('paperlessApp')
  .directive('resume', function () {
    return {
      templateUrl: '../views/resume.html',
      restrict: 'E',
      replace: true,
      link: function postLink() {
      }
    };
  });
