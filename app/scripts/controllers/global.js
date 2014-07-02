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
		var g = this;


		/*#############################################################
		BRANDS TABS
		#############################################################*/
		g.brands = {
			digitalposters: true,
			eventranet : false,
			speakerprep : false

		};

		g.updateBrand = function(brand){
			console.log('updating brand content');
			if(g.brands[brand]) {
				console.log('brand content is already in view');
				return;
			}
			//set prev tab to false
			angular.forEach(g.brands, function(val, key){
				if(g.brands[key]) {
					console.log('removing ' + key);
					g.brands[key] = false;
				}
			});
			//set new tab
			console.log('setting ' + brand);
			g.brands[brand] = true;
		};



		/*#############################################################
		BANNER DETECTION
		#############################################################*/

		//auto-presume banner is going to be visible on load
		g.bannerView = true;
		g.initialState = true;

		//watcher to check state and remove once state changes
		var bannerListener = $scope.$watch(function(){
			return g.bannerView;
		}, function(n) {
			if(n === false) {
				console.log('banner not visible!');
				g.initialState = false;
				//remove watcher
				removeInitialStateWatchers();
			}
		});


		//help bring in nav if page is reloaded and viewer is somewhere else on page
		var midSectionListener = $scope.$watch(function(){
			return g.midSectionView;
		}, function(n){
			if(n) {
				console.log('mid section content detected');
				g.initialState = false;
				g.bannerView = false;
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

		//brisbane
		var brisMarker = {
			coords: {
				latitude: -27.4073899,
				longitude: 153.0028595
			},
			name : 'bris'
		};

		//melbourne
		var melbMarker = {
			//this coords are correct to the po box
			coords: {
				latitude: -37.813165,
				longitude: 144.955814
			},
			name : 'melb'
		};

		//sydney
		var sydMarker = {
			coords: {
				latitude: -33.7969235,
				longitude: 150.9224326
			},
			name : 'syd'
		};

		g.map = {
			center: {
				latitude: -33,
				longitude: 150
			},
			zoom: 5,
			markerIcon : '../images/icons/letter_p.png',
			markers : [melbMarker, brisMarker, sydMarker]

		};

		//default contact
		g.currentContact = 'melb';

	});
