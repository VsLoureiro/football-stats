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
        templateUrl: 'app/view/leagueTable.html',
        controller: 'LeagueTableController',
        controllerAs: 'leagueCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
