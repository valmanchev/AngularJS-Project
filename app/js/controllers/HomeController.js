'use strict';

// The HomeController holds the presentation logic for the home screen
app.controller('HomeController',
    function ($scope, $rootScope, adsService, notifyService, pageSize) {
	    function ($scope, adsService, notifyService) {
	        adsService.getAds(
	            null,
	            function success(data) {
	                // TODO: put the ads in the scope
	            },
	            function error(err) {
	                notifyService.showError("Cannot load ads", err);
	            }
	        );
	    }


      // TODO
      //$scope.adsService = adsService;
      //$scope.notifyService = notifyService;
      //$scope.pageSize = pageSize;
   }

);
