'use strict';

/**
 * @ngdoc function
 * @name noteTakingAppNoApp.controller:NotecreatecontrollerCtrl
 * @description
 * # NotecreatecontrollerCtrl
 * Controller of the noteTakingAppNoApp
 */
angular.module('noteTakingAppNoApp')
  .controller('NotecreatecontrollerCtrl', ['$scope', 'NotesResourceService', 'DrupalServerUrls', 'UserService', '$location',
      function ($scope, NotesResourceService, DrupalServerUrls, UserService, $location) {
      var isLoggedIn = UserService.isLoggedIn();
      if (isLoggedIn == true) {
        $scope.saveNote = function() {
          var note = new NotesResourceService({
            _links: {
              type: {href: DrupalServerUrls.REST_LINK_URL},
            },
            title: [{value: this.note.title}],
            body: [{value: this.note.body}]
          });
          note.$save(function(response) {
            // @TODO Redirect to notes page
            console.log(response);
          });
        };
      }
      else {
        $location.path('login');
      }
  }]);
