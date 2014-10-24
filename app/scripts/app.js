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
    $urlRouterProvider.otherwise('/notes');

    $stateProvider.state('notesList', {
      url: '/notes',
      views: {
        'content': {templateUrl: 'views/notes.html'},
        'menu': {
          templateUrl: 'views/partials/menu/_menu.html',
          controller: 'MainCtrl'
        }
      }

    }).
    state('notesCreate', {
      url: '/create',
        views: {
          'content': {templateUrl: 'views/partials/note/_form.html', controller: 'NotecreatecontrollerCtrl'},
          'menu': {
            templateUrl: 'views/partials/menu/_menu.html',
            controller: 'MainCtrl'
          }
        }

    }).
    state('notesView', {
      url: '/view/:id',
      controller: 'MainCtrl'
    })
    .state('login', {
      url: '/login',
        views: {
          'content': {controller: 'LogincontrollerCtrl', templateUrl: 'views/partials/login/_form.html'},
          'menu': {
            templateUrl: 'views/partials/menu/_menu.html',
            controller: 'MainCtrl'
          }
        }
     });

  });
