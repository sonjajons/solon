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
      .when('/food', {
      	templateUrl:'views/food.html',
      	controller: 'MainCtrl'
      })
      .when('/drinks', {
      	templateUrl:'views/drinks.html',
      	controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })
      .when('/venue', {
      	templateUrl:'views/venue.html',
      	controller: 'MainCtrl'
      })
      .when('/openingHours', {
      	templateUrl: 'views/open.html',
      	controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });