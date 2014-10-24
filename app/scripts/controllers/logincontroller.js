'use strict';

/**
 * @ngdoc function
 * @name noteTakingAppNoApp.controller:LogincontrollerCtrl
 * @description
 * # LogincontrollerCtrl
 * Controller of the noteTakingAppNoApp
 */
angular.module('noteTakingAppNoApp')
  .controller('LogincontrollerCtrl', ['$scope', 'UserService', '$state', function ($scope, UserService, $state) {
    var isLoggedIn = UserService.isLoggedIn();
      if(isLoggedIn == false) {
        $scope.errorMessage = '';
        $scope.hasError = false;
        $scope.login = function() {
          $scope.errorMessage = '';
          $scope.hasError = false;
          var promise = UserService.login(this.user.username, this.user.password);
          promise.then(function() {
            $state.go('notesCreate');
          }, function() {
            $scope.errorMessage = 'The credentials provided were incorrect';
            $scope.hasError = true;
          });
        };
      }

  }]);
