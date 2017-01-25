describe('dataCtrl', function() {

    var $rootScope, $scope,$controller,dataCtrl;

    beforeEach(module('angularApp'));

    beforeEach(inject(function(_$rootScope_, _$controller_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;

        dataCtrl = $controller('dataCtrl', {'$rootScope' : $rootScope, '$scope': $scope});
    }));

    it('should exist', function() {
        expect(dataCtrl).toBeDefined();
    });
});
