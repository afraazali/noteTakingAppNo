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
      url: '/notes',
      views: {
        'content': {templateUrl: 'views/notes.html'},
        'menu': {
          templateUrl: 'views/partials/menu/_menu.html',
          controller: 'NavcontrollerCtrl'
        }
      }

    }).
    state('notesCreate', {
      url: '/create',
        views: {
          'content': {templateUrl: 'views/partials/note/_form.html', controller: 'NotecreatecontrollerCtrl'},
          'menu': {
            templateUrl: 'views/partials/menu/_menu.html',
            controller: 'NavcontrollerCtrl'
          }
        }

    }).
    state('notesView', {
        url: '/view/:id',
        views: {
          'content': {controller: 'NoteviewcontrollerCtrl', templateUrl: 'views/notes.html'},
          'menu': {
            templateUrl: 'views/partials/menu/_menu.html',
            controller: 'NavcontrollerCtrl'
          }
        }
    }).
    state('showallnotesView', {
        url: '/showallnotes',
        views: {
          'content': {controller: 'ShowallnotescontrollerCtrl', templateUrl: 'views/showAll.html'},
          'menu': {
            templateUrl: 'views/partials/menu/_menu.html',
            controller: 'NavcontrollerCtrl'
          }
        }
    })
    .state('login', {
      url: '/login',
        views: {
          'content': {controller: 'LogincontrollerCtrl', templateUrl: 'views/partials/login/_form.html'},
          'menu': {
            templateUrl: 'views/partials/menu/_menu.html',
            controller: 'NavcontrollerCtrl'
          }
        }
     })
      .state('logout', {
      url: '/logout',
      views: {
        'content': {
          template: 'Logged out'
        },
        'menu': {
          templateUrl: 'views/partials/menu/_menu.html',
          controller: 'NavcontrollerCtrl'
        }

      }

    });

  });