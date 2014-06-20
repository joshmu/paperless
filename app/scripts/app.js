'use strict';

/**
 * @ngdoc overview
 * @name paperlessApp
 * @description
 * # paperlessApp
 *
 * Main module of the application.
 */
angular
  .module('paperlessApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ui.router'
  ])


.config(function($stateProvider, $urlRouterProvider) {
	//
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/");
	//
	// Now set up the states
	$stateProvider
		.state('main', {
			url: "/",
			templateUrl: "views/main.html"
		})
//		.state('state1.list', {
//			url: "/list",
//			templateUrl: "partials/state1.list.html",
//			controller: function($scope) {
//				$scope.items = ["A", "List", "Of", "Items"];
//			}
//		})
//		.state('state2', {
//			url: "/state2",
//			templateUrl: "partials/state2.html"
//		})
//		.state('state2.list', {
//			url: "/list",
//			templateUrl: "partials/state2.list.html",
//			controller: function($scope) {
//				$scope.things = ["A", "Set", "Of", "Things"];
//			}
//		})
});

/*
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/aboutng', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
*/