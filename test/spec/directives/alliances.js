'use strict';

describe('Directive: alliances', function () {

  // load the directive's module
  beforeEach(module('paperlessApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<alliances></alliances>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the alliances directive');
  }));
});
