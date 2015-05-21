'use strict';

/**
 * @ngdoc function
 * @name solonWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the solonWebApp
 */
angular.module('solonWebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
