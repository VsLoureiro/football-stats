(function () {
  'use strict';

  angular
    .module('footballStats')
    .controller('LeagueTableController', LeagueTableController);

  function LeagueTableController(footballData, $route, $log){
    var vm = this;
    vm.leagueTable = {};
    vm.leagueFixtures = {};

    footballData.getLeagueTable($route.current.params.id).then(function (leagueTable) {
        vm.leagueTable = leagueTable.data;
        footballData.getLeagueFixtures($route.current.params.id, leagueTable.data.matchday).then(function (leagueFixtures) {
            vm.leagueFixtures = leagueFixtures.data.fixtures;
          },
          function () {
            $log.error('LeagueTableController: Error getting league fixtures from api!');
          });
      },
      function () {
        $log.error('LeagueTableController: Error getting league table from api!');
      });
  }

})();
