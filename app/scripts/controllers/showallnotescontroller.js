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

        //NotesShowResourceService.get(function(data){
        //    $scope.noteInfo = {
        //        title: data[0].title[0].value,
        //        body: data[0].body[0].value
        //    };
        //    //console.log(data[0].body[0].value);
        //});
        //$scope.showNote = function() {
        //    var note = new NotesShowResourceService({
        //        title: [{value: this.note.title}],
        //        body: [{value: this.note.body}]
        //    });
        //    console.log(note);
        //};
        $scope.notes = NotesShowResourceService.get();
        console.log($scope.notes);
    }]);
