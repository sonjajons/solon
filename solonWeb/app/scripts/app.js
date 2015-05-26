'use strict';

/**
 * @ngdoc overview
 * @name solonWebApp
 * @description
 * # solonWebApp
 *
 * Main module of the application.
 */
angular
  .module('solonWebApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate'
  ])
  .config(function ($routeProvider, $translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'lang_',
      suffix: '.json'
    });

    $translateProvider.use('is');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });