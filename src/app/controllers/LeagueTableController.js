(function () {
  'use strict';

  angular
    .module('footballStats')
    .controller('LeagueTableController', LeagueTableController);

  function LeagueTableController(footballData, $route, $log){
    var vm = this;
    vm.data = {};

    footballData.getLeagueTable($route.current.params.id).then(function (leagueTable) {
        vm.data = leagueTable.data;
      },
      function () {
        $log.error('LeagueTableController: Error connecting to api!');
      });
  }

})();
