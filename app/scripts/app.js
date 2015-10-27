'use strict';

/**
 * @ngdoc overview
 * @name footballStatsApp
 * @description
 * # footballStatsApp
 *
 * Main module of the application.
 */
angular.module('MainCtrl', []);
angular.module('AboutCtrl', []);

angular
  .module('footballStatsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'MainCtrl',
    'AboutCtrl'
  ]);
