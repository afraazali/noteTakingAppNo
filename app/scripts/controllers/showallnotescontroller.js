'use strict';

/**
 * @ngdoc function
 * @name noteTakingAppNoApp.controller:NoteviewcontrollerCtrl
 * @description
 * # NoteviewcontrollerCtrl
 * Controller of the noteTakingAppNoApp
 */
angular.module('noteTakingAppNoApp')
    .controller('ShowallnotescontrollerCtrl', ['$scope', 'NotesShowResourceService', 'DrupalServerUrls', function ($scope, NotesShowResourceService, DrupalServerUrls) {
        $scope.notes = NotesShowResourceService.get();
        //console.log($scope.notes);
    }]);
