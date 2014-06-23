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
	'ui.router',
	'angular-inview'
  ])


.config(function($stateProvider, $urlRouterProvider) {
	//
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/");
	//
	// Now set up the states
	$stateProvider
		.state('main', {
			templateUrl: "views/main.html"
		})
			.state('main.digitalposters', {
				url: "/",
				templateUrl: "views/main.digitalposters.html"
			})
			.state('main.eventranet', {
				templateUrl: "views/main.eventranet.html"
			})
			.state('main.speakersprep', {
				templateUrl: "views/main.speakersprep.html"
			})
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