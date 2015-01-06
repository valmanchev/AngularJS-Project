'use strict';

// The LoginController is responsible for the "Login" screen
app.controller('LoginController',
    function ($scope, $location, authService, notifyService) {
        // TODO
      $scope.authService = authService;
      $scope.notifyService = notifyService;
    }
);
