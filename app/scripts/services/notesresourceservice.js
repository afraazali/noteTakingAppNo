'use strict';

/**
 * @ngdoc service
 * @name noteTakingAppNoApp.NotesResourceService
 * @description
 * # NotesResourceService
 * Factory in the noteTakingAppNoApp.
 */
angular.module('noteTakingAppNoApp')
  .factory('NotesResourceService', ['$resource', 'DrupalServerUrls', 'UserService', function ($resource, DrupalServerUrls, UserService) {
    return $resource(DrupalServerUrls.DOMAIN + '/node/:id', {'id': '@id'}, {
      get: {
        headers: {
          'Accept': 'application/hal+json'
        }
      },
      save: {
        method: 'POST',
        url: DrupalServerUrls.DOMAIN + '/entity/node',
        headers: {
          'Content-Type': 'application/hal+json',
          // @TODO Figure out a way to pass credentials.
          // @TODO Dynamically generate this.
          'Authorization': UserService.isAuthenticated()
        }
      }
    });
  }]);
