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
            eventranet: false,
            speakerprep: false

        };
        g.brandsArr = ['digitalposters', 'eventranet', 'speakerprep'];



        g.updateBrand = function(brand) {
            console.log('updating brand content');
            if (g.brands[brand]) {
                console.log('brand content is already in view');
                return;
            }
            //set prev tab to false
            angular.forEach(g.brands, function(val, key) {
                if (g.brands[key]) {
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
        var bannerListener = $scope.$watch(function() {
            return g.bannerView;
        }, function(n) {
            if (n === false) {
                console.log('banner not visible!');
                g.initialState = false;
                //remove watcher
                removeInitialStateWatchers();
            }
        });

        //help bring in nav if page is reloaded and viewer is somewhere else on page
        var midSectionListener = $scope.$watch(function() {
            return g.midSectionView;
        }, function(n) {
            if (n) {
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
            name: 'bris'
        };

        //melbourne
        var melbMarker = {
            //this coords are correct to the po box
            coords: {
                latitude: -37.813165,
                longitude: 144.955814
            },
            name: 'melb'
        };

        //sydney
        var sydMarker = {
            coords: {
                latitude: -33.7969235,
                longitude: 150.9224326
            },
            name: 'syd'
        };

        g.map = {
            center: {
                latitude: -33,
                longitude: 150
            },
            zoom: 5,
            markerIcon: '../images/icons/letter_p.png',
            markers: [melbMarker, brisMarker, sydMarker]

        };

        //default contact
        g.currentContact = 'melb';

        /*#############################################################
		 ALLIANCES
		 #############################################################*/
        g.slider = {};
        g.slider.images = [{
            src: '../images/alliances/CSServices.jpg',
            title: 'CSServices',
            url: 'http://www.csservices.com.au/'
        }, {
            src: '../images/alliances/Saffron.png',
            title: 'Saffron',
            url: 'http://saffronstudio.com.au/'
        }, {
            src: '../images/alliances/RombusDigital.jpg',
            title: 'Rhombus Digital',
            url: 'http://rhombus.com.au/'
        }, {
            src: '../images/alliances/IrisAV.png',
            title: 'Iris AV',
            url: 'http://www.irisav.com.au/'
        }, {
            src: '../images/alliances/Naomi.png',
            title: 'Naomi Jane Audio',
            url: 'http://naomijaneaudio.com/Home.html'
        }, {
            src: '../images/alliances/Carlton_Terrace.png',
            title: 'Carlton Terrace',
            url: 'http://www.carltonterrace.com.au/'
        }];



        /*#############################################################
		 ALLIANCES & RESUME TOGGLE
		 #############################################################*/
        g.navToggleItems = {
            resume: {
                name: 'resume',
                visible: false
            },
            alliances: {
                name: 'alliances',
                visible: false
            }
        };

        g.navToggle = function(toBeVisible) {
            var prev;
            //set all items to invisible
            angular.forEach(g.navToggleItems, function(item) {
            	//store if item is visible
                if (item.visible) {
                    prev = item.name;
                }
                item.visible = false;
            });
            //show selected if previously invisible
            if (prev !== toBeVisible) {
                g.navToggleItems[toBeVisible].visible = true;
            }
        };
    });
