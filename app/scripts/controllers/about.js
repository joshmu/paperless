'use strict';

/**
 * @ngdoc function
 * @name paperlessApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the paperlessApp
 */
angular.module('paperlessApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
