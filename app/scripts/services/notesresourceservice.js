'use strict';

/**
 * @ngdoc service
 * @name mytasksappApp.NotesResourceService
 * @description
 * # NotesResourceService
 * Factory in the mytasksappApp.
 */
angular.module('mytasksappApp')
  .factory('NotesResourceService', ['$resource', function ($resource) {
    return $resource('/node/:id', {'id': '@id'}, {
      get: {
        headers: {
          'Accept': 'application/hal+json'
        }
      },
      save: {
        method: 'POST',
        url: '/entity/node',
        headers: {
          'Content-Type': 'application/hal+json',
          // @TODO Figure out a way to pass credentials.
          // @TODO Dynamically generate this.
          'Authorization': 'Basic YWRtaW46YWRtaW4='
        }
      }
    });
  }]);
