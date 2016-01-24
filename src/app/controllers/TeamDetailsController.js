
(function () {
  'use strict';

  angular
    .module('footballStats')
    .controller('TeamDetailsController', TeamDetailsController);

  function TeamDetailsController(footballData, $route, $log){
    var vm = this;
    vm.players = [];
    vm.team = [];

    footballData.getTeamDetails($route.current.params.id).then(function (team) {
        vm.team = team.data;
        footballData.getPlayerDetails($route.current.params.id).then(function (players) {
            vm.players = players.data.players;
          },
          function () {
            $log.error('TeamDetailsController: Error connecting to api!');
          });
      },
      function () {
        $log.error('TeamDetailsController: Error connecting to api!');
      });
  }

})();
