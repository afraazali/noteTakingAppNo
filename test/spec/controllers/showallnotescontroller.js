'use strict';

describe('Controller: ShowallnotescontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('noteTakingAppNoApp'));

  var ShowallnotescontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShowallnotescontrollerCtrl = $controller('ShowallnotescontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
