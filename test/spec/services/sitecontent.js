'use strict';

describe('Service: SiteContent', function () {

  // load the service's module
  beforeEach(module('paperlessApp'));

  // instantiate service
  var SiteContent;
  beforeEach(inject(function (_SiteContent_) {
    SiteContent = _SiteContent_;
  }));

  it('should do something', function () {
    expect(!!SiteContent).toBe(true);
  });

});
