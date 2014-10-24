'use strict';

/**
 * @ngdoc overview
 * @name noteTakingAppNoApp
 * @description
 * # noteTakingAppNoApp
 *
 * Main module of the application.
 */
angular
    .module('noteTakingAppNoApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/login');

      $stateProvider.state('notesList', {
        url: '/login',
        controller: 'LogincontrollerCtrl',
        templateUrl: 'views/partials/login/_form.html'
      }).
          state('notesCreate', {
            url: '/create',
            templateUrl: 'views/partials/note/_form.html',
            controller: 'NotecreatecontrollerCtrl'
          }).
          state('notesView', {
            url: '/view/:id',
            controller: 'NoteviewcontrollerCtrl'
          }).
          state('logout', {
            url: '/logout',
            controller: 'NavcontrollerCtrl'
          });
});
