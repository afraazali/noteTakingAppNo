'use strict';

describe('Controller: NoteviewcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('noteTakingAppNoApp'));

  var NoteviewcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NoteviewcontrollerCtrl = $controller('NoteviewcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
