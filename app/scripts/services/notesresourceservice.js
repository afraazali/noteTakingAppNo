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
    return $resource(DrupalServerUrls.DOMAIN + '/note/:id', {'id': '@id'}, {
      get: {
        isArray: true,
        headers: {
          'Accept': 'application/hal+json'
        }
      },
      save: {
        method: 'POST',
        url: DrupalServerUrls.DOMAIN + '/entity/node',
        headers: {
          'Content-Type': 'application/hal+json',
          'Authorization': UserService.isAuthenticated()
        }
      }
    });
  }]);

angular.module('noteTakingAppNoApp')
    .factory('NotesShowResourceService', ['$resource', 'DrupalServerUrls', function ($resource, DrupalServerUrls) {
        return $resource(DrupalServerUrls.DOMAIN + '/all-content', '../rest/api.php', {
            get: {
                isArray: true,
                headers: {
                    'Accept': 'application/hal+json'
                }
            }
        });
    }]);
