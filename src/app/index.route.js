(function() {
  'use strict';

  angular
    .module('footballStats')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/leagueTable/:id', {
        templateUrl: 'app/views/leagueTable.html',
        controller: 'LeagueTableController',
        controllerAs: 'leagueCtrl'
      })
      .when('/about', {
        templateUrl: 'app/views/about.html',
        controller: 'AboutController',
        controllerAs: 'aboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
