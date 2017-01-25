'use strict';
angular.module('angularApp')
.controller('dataCtrl', function($scope, $http) {
    $http.get('scripts/mock-data/MOCK_DATA.json').then(function(response) {
      $scope.myData = response.data;
    });
       $scope.sort = function(keyname){
       $scope.sortKey = keyname;   //set the sortKey to the param passed
       $scope.reverse = !$scope.reverse; //if true make it false and vice versa
  };

   });
