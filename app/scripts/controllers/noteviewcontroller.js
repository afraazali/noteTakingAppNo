'use strict';

/**
 * @ngdoc function
 * @name noteTakingAppNoApp.controller:NoteviewcontrollerCtrl
 * @description
 * # NoteviewcontrollerCtrl
 * Controller of the noteTakingAppNoApp
 */
angular.module('noteTakingAppNoApp')
    .controller('NoteviewcontrollerCtrl', ['$scope', '$stateParams','NotesResourceService', 'DrupalServerUrls', function ($scope, $stateParams, NotesResourceService, DrupalServerUrls) {
        console.log($stateParams.id);
        var output = NotesResourceService.get({id : $stateParams.id}, function() {
            console.log(output);
        });
        //NotesResourceService.get().success(function(data){
        //    //assign value
        //    $scope.noteInfo = {
        //        title: data.title[0].value,
        //        body: data.body[0].value
        //    };
        //}).error(function(){
        //    console.log('error');
        //});
    }]);