'use strict';

describe('Service: DrupalServerUrls', function () {

  // load the service's module
  beforeEach(module('noteTakingAppNoApp'));

  // instantiate service
  var DrupalServerUrls;
  beforeEach(inject(function (_DrupalServerUrls_) {
    DrupalServerUrls = _DrupalServerUrls_;
  }));

  it('should do something', function () {
    expect(!!DrupalServerUrls).toBe(true);
  });

  it('should have a REST_URL_LINK property', function() {
    expect(DrupalServerUrls.REST_URL_LINK).toBeDefined();
  })

});
