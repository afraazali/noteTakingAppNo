'use strict';

/**
 * @ngdoc function
 * @name noteTakingAppNoApp.controller:NavcontrollerCtrl
 * @description
 * # NavcontrollerCtrl
 * Controller of the noteTakingAppNoApp
 */
angular.module('noteTakingAppNoApp')
    .controller('NavcontrollerCtrl', ['$scope', 'UserService', '$rootScope', '$state', function ($scope, UserService, $rootScope, $state) {
      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        if (toState.name === 'logout') {
          UserService.logout();
          $state.go('login');
        }
      });
    
      $scope.isLoggedIn = UserService.isLoggedIn();

      $scope.menuItems = [];

      if ($scope.isLoggedIn) {
        $scope.menuItems.push({'href': '#/create', 'title': 'Add Note'});
        $scope.menuItems.push({'href': '#/showallnotes', 'title': 'Show All Notes'});
        $scope.menuItems.push({'href': '#/logout', 'title': 'Logout'});
      }
      else {
        $scope.menuItems.push({'href': '#/login', 'title': 'Login'});
      }
}]);
