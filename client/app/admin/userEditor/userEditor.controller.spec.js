'use strict';

describe('Controller: UserEditorCtrl', function() {

    // load the controller's module
    beforeEach(module('aksiteApp'));

    var UsereditorCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        UsereditorCtrl = $controller('UserEditorCtrl', {
            $scope: scope
        });
    }));

    it('should ...', function() {
        expect(1).to.equal(1);
    });
});
