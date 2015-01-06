'use strict';

app.controller('RegisterController',
    function ($scope, $location, authService, notifyService) {
        // TODO
      $scope.authService = authService;
      $scope.notifyService = notifyService;
    }
);
