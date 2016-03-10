'use strict';

/* jasmine specs for controllers go here */
describe('topoftheline controllers', function() {

  describe('MainController', function(){

    beforeEach(module('singleApp'));
	
	
	
	

    it('should scope be defined', inject(function($controller) {
      var scope = {},
          ctrl = $controller('MainController', {$scope:scope});

      expect(scope).toBeDefined();
    }));

  });
});
