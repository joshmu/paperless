'use strict';

/**
 * @ngdoc function
 * @name paperlessApp.controller:GlobalCtrl
 * @description
 * # GlobalCtrl
 * Controller of the paperlessApp
 */
angular.module('paperlessApp')
	.controller('GlobalCtrl', function($scope) {
		var self = this;


		/*#############################################################
		BRANDS TABS
		#############################################################*/
		this.brands = {
			digitalposters: true,
			eventranet : false,
			speakerprep : false

		};

		this.updateBrand = function(brand){
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
		this.bannerView = true;
		this.initialState = true;

		//watcher to check state and remove once state changes
		var bannerListener = $scope.$watch(function(){
			return self.bannerView;
		}, function(n) {
			if(n === false) {
				console.log('banner not visible!');
				self.initialState = false;
				//remove watcher
				removeInitialStateWatchers();
			}
		});


		//help bring in nav if page is reloaded and viewer is somewhere else on page
		var midSectionListener = $scope.$watch(function(){
			return self.midSectionView;
		}, function(n){
			if(n) {
				console.log('mid section content detected');
				self.initialState = false;
				self.bannerView = false;
				//remove initial state watchers
				removeInitialStateWatchers();
			}
		});

		function removeInitialStateWatchers() {
				bannerListener();
				midSectionListener();
		}

		/*#############################################################
		GOOGLE MAPS
		#############################################################*/
		this.map = {
			center: {
				latitude: -33,
				longitude: 150
			},
			zoom: 5
		};

		this.map.markerIcon = '../images/icons/letter_p.png';
		this.map.markers = [];

		//brisbane
		var brisMarker = {
			coords: {
				latitude: -27.4073899,
				longitude: 153.0028595
			}
		};
		this.map.markers.push(brisMarker);

		//melbourne
		var melbMarker = {
			coords: {
				latitude: -37.8602828,
				longitude: 145.079616
			}
		};
		this.map.markers.push(melbMarker);

		//sydney
		var sydMarker = {
			coords: {
				latitude: -33.7969235,
				longitude: 150.9224326
			}
		};
		this.map.markers.push(sydMarker);

	});
