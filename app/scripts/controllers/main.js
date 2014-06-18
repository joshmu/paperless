'use strict';

/**
 * @ngdoc function
 * @name paperlessApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the paperlessApp
 */
angular.module('paperlessApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
