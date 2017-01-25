'use strict';
angular.module('angularApp',['angularUtils.directives.dirPagination','anguFixedHeaderTable'])
.directive('myNumber', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, model) {

      function myValidation(value) {
        if (value.match('^[0-9]{5,10}$')) {
          model.$setValidity('numbers', true);
        } else {
          model.$setValidity('numbers', false);

      }
         return value;
      }
      model.$parsers.push(myValidation);
    }
  };
})
.directive('myEmail', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, model) {

      function myValidation(value) {
        if (value.match('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$')) {
          model.$setValidity('email', true);
        } else {
          model.$setValidity('email', false);

      }
         return value;
      }
      model.$parsers.push(myValidation);
    }
  };
})
.directive('myAlpha', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, model) {

      function myValidation(value) {
        if (value.match('^[a-zA-Z0-9]{3,15}$')) {
          model.$setValidity('alpha', true);
        } else {
          model.$setValidity('alpha', false);

      }
         return value;
      }
      model.$parsers.push(myValidation);
    }
  };
});
