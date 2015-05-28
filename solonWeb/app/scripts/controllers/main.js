'use strict';

/**
 * @ngdoc function
 * @name solonWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the solonWebApp
 */
angular.module('solonWebApp')
  .controller('MainCtrl', function ($scope, $translate) {
    // Setting language for site
    $scope.isl = true;

    $scope.changeLanguage = function () {
      if($scope.isl) {
        // Changes language for site and menus
        $translate.use('en');
        $scope.isFood = false;
        $scope.isl = false;
      } else {
      	// Changes language for site and menus
        $translate.use('is');
        $scope.isl = true;
        $scope.isFood = true;
      }
    };

  });