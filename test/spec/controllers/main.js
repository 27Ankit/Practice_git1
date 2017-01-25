'use strict';

describe('Controller: dataCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var dataCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,$http) {
    scope = $rootScope.$new();
    dataCtrl = $controller('dataCtrl', {
      $scope: scope
      $http : _http
      // place here mocked dependencies
    });
  }));
  it('should be defined', function () {
    expect(dataCtrl).toBeDefined();
  });


});
