'use strict';

describe('Service: NotesResourceService', function () {

  // load the service's module
  beforeEach(module('noteTakingAppNoApp'));

  // instantiate service
  var NotesResourceService;
  beforeEach(inject(function (_NotesResourceService_) {
    NotesResourceService = _NotesResourceService_;
  }));

  it('should do something', function () {
    expect(!!NotesResourceService).toBe(true);
  });

});
