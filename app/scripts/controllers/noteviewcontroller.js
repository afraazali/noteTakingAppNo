'use strict';

/**
 * @ngdoc function
 * @name noteTakingAppNoApp.controller:NoteviewcontrollerCtrl
 * @description
 * # NoteviewcontrollerCtrl
 * Controller of the noteTakingAppNoApp
 */
angular.module('noteTakingAppNoApp')
    .controller('NoteviewcontrollerCtrl', ['$scope', '$stateParams', 'NotesResourceService', 'DrupalServerUrls', function ($scope, $stateParams,NotesResourceService, DrupalServerUrls) {
        //console.log(NotesResourceService.get());
        NotesResourceService.get({id: $stateParams.id},function(data){
            $scope.noteInfo = {
                title: data[0].title[0].value,
                body: data[0].body[0].value
            };
            console.log($scope.noteInfo.title);
        });
    }]);