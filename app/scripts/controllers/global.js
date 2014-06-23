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
		BRANDS TABS
		#############################################################*/
		self.brands = {
			digitalposters: true,
			eventranet : false,
			speakerprep : false

		};

		self.updateBrand = function(brand){
			console.log('updating brand content');
			if(self.brands[brand]) {
				console.log('brand content is already in view');
				return;
			}
			//set prev tab to false
			angular.forEach(self.brands, function(val, key){
				if(self.brands[key]) {
					console.log('removing ' + key);
					self.brands[key] = false;
				}
			});
			//set new tab
			console.log('setting ' + brand);
			self.brands[brand] = true;
		};



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
