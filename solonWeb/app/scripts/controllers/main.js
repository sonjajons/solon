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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.lang = 'is';
    console.log('YOLO');

    $scope.changeLanguage = function () {
    console.log('INNI');
      if($scope.lang === 'is') {
        $translate.use('en');
        $scope.lang = 'en';
        console.log('Language changed to english');
      }
      else if($scope.lang === 'en') {
        $translate.use('is');
        $scope.lang = 'is';
        console.log('Language changed to icelandic');
      }
    };

  });
