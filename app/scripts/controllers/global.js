'use strict';

/**
 * @ngdoc function
 * @name paperlessApp.controller:GlobalCtrl
 * @description
 * # GlobalCtrl
 * Controller of the paperlessApp
 */
angular.module('paperlessApp')
	.controller('GlobalCtrl', function($scope, $timeout) {
		var self = this;




		/*#############################################################
		BANNER DETECTION
		#############################################################*/

		//auto-presume banner is going to be visible on load
		self.bannerView = true;
		self.initialState = true;

		//watcher to check state and remove once state changes
		var bannerListener = $scope.$watch(function(){
			return self.bannerView;
		}, function(n, o) {
			if(n === false) {
				console.log('banner not visible!');
				self.initialState = false;
				//remove watcher
				bannerListener();
			}
		});

		var midSectionListener = $scope.$watch(function(){
			return self.midSectionView;
		}, function(n, o){
			if(n) {
				console.log('mid section content detected');
				self.initialState = false;
				self.bannerView = false;
				//remove initial state watchers
				bannerListener();
				midSectionListener();
			}
		});

	});
