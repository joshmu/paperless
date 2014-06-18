'use strict';

/**
 * @ngdoc service
 * @name paperlessApp.SiteContent
 * @description
 * # SiteContent
 * Factory in the paperlessApp.
 */
angular.module('paperlessApp')
  .factory('SiteContent', function () {
    // Service logic
    // ...
	var sc = {};

    var meaningOfLife = 42;

    // Public API here
	sc.meaningOfLife = function(){
		return meaningOfLife;
	};

    return sc;

  });
