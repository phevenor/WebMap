'use strict';

/**
 * @ngdoc overview
 * @name webMapApp
 * @description
 * # webMapApp
 *
 * Main module of the application.
 */
angular
  .module('webMapApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
