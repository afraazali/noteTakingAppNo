'use strict';

/**
 * @ngdoc function
 * @name noteTakingAppNoApp.controller:NavcontrollerCtrl
 * @description
 * # NavcontrollerCtrl
 * Controller of the noteTakingAppNoApp
 */
angular.module('noteTakingAppNoApp')
    .controller('NavcontrollerCtrl', ['$scope', 'UserService', '$location', function ($scope, UserService, $location) {
      $scope.isLoggedIn = UserService.isLoggedIn();

      // Shouldnt put this here but I am tired.
      $scope.logout = function () {
        UserService.logout();
        $location.path("/login");
      }
}]);
