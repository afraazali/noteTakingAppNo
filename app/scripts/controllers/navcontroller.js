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
      $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        if (toState.name === 'logout') {
          UserService.logout();
          $state.go('login');
        }
        if (toState.name === 'login' && UserService.isLoggedIn()) {
          $state.go('showallnotesView');
        }
      });

      $scope.isLoggedIn = UserService.isLoggedIn();

      $scope.menuItems = [];

      if ($scope.isLoggedIn) {
        $scope.menuItems.push({'sref': 'notesCreate', 'title': 'Add Note'});
        $scope.menuItems.push({'sref': 'showallnotesView', 'title': 'Show All Notes'});
        $scope.menuItems.push({'sref': 'logout', 'title': 'Logout'});
      }
      else {
        $scope.menuItems.push({'sref': 'login', 'title': 'Login'});
      }
}]);
