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
  .config(function ($routeProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/notes');

    $stateProvider.state('notesList', {
      url: '/notes',
      templateUrl: 'views/notes.html'
    }).
    state('notesCreate', {
      url: '/create',
      templateUrl: 'views/partials/note/_form.html',
      controller: 'MainCtrl'
    }).
    state('notesView', {
      url: '/view/:id',
      controller: 'MainCtrl'
    });

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
