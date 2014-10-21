'use strict';

/**
 * @ngdoc service
 * @name noteTakingAppNoApp.UserService
 * @description
 * # UserService
 * Factory in the noteTakingAppNoApp.
 */
angular.module('noteTakingAppNoApp')
  .factory('UserService', ['$q', '$http', '$cookieStore', function ($q, $http, $cookieStore) {

    // Public API here
    return {
      login: function(username, password) {
        var deferred = $q.defer();
        $http.post('/ng-auth', {'username': username, 'password': password}, {headers: {'Content-type': 'application/hal+json'}}).success(function(data) {
          if (typeof data.authed !== 'undefined') {
            $cookieStore.put('authenticated', data.authed);
            deferred.resolve();
          }
          else {
            deferred.reject();
          }

        }).error(function(error) {
          deferred.reject(error);
        });
        return deferred.promise;
      },

      isAuthenticated: function() {
        return 'Basic ' + $cookieStore.get('authenticated');
      },

      logout: function() {
        $cookieStore.remove('authenticated');
      }
    };
  }]);
