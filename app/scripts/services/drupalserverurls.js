'use strict';

/**
 * @ngdoc service
 * @name noteTakingAppNoApp.DrupalServerUrls
 * @description
 * # DrupalServerUrls
 * Constant in the noteTakingAppNoApp.
 */
angular.module('noteTakingAppNoApp')
  .constant('DrupalServerUrls', {
    'REST_LINK_URL': 'http://testbeddev.devcloud.acquia-sites.com/rest/type/node/notes',
    'DOMAIN': 'http://testbeddev.devcloud.acquia-sites.com'
  });
