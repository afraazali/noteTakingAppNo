'use strict';

/**
 * @ngdoc function
 * @name noteTakingAppNoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the noteTakingAppNoApp
 */
angular.module('noteTakingAppNoApp')
  .controller('MainCtrl',['$scope', 'UserService', function ($scope, UserService) {
    $scope.menuItems = [];

    if (UserService.isAuthed()) {
      $scope.menuItems.push('Logged In');
    }
    else {
      $scope.menuItems.push('Logged Out');
    }
  }]);
