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
      templateUrl: 'views/notes.html'
    }).
    state('notesCreate', {
      url: '/create',
      templateUrl: 'views/partials/note/_form.html',
      controller: 'NotecreatecontrollerCtrl'
    }).
    state('notesView', {
      url: '/view/:id',
      templateUrl: 'views/notes.html',
      controller: 'NoteviewcontrollerCtrl'
    })
    .state('login', {
      url: '/login',
      controller: 'LogincontrollerCtrl',
      templateUrl: 'views/partials/login/_form.html'
     })
     .state('allNotes', {
      url: '/showAll',
      controller: 'ShowallnotescontrollerCtrl',
      templateUrl: 'views/showAll.html'
     });

  });
