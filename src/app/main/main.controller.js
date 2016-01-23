(function () {
  'use strict';

  angular
    .module('footballStats')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $log, footballData, toastr, $location) {
    var vm = this;
    vm.jumboImagePath = 'assets/images/soccer-min.png';

    vm.leagueList = [];
    vm.classAnimation = '';
    vm.creationDate = 1446031204049;
    vm.showToastr = showToastr;
    vm.showCaption = false;

    vm.showLeagueTable = function (league) {
      $location.path('/leagueTable/' + league.id);
    };

    activate();

    function activate() {
      getLeagues();
      var promise = $timeout(function () {
        vm.classAnimation = 'fadeInDown';
        vm.showCaption = true;
      }, 300);

      $timeout(function () {
        vm.classAnimation = '';
        $timeout.cancel(promise);
      }, 1150);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getLeagues() {
      footballData.getLeagues().then(function (leagueListTemp) {
          leagueListTemp = footballData.addLogosProperty(leagueListTemp);
          vm.leagueList = leagueListTemp;
        },
        function () {
          $log.error('Error connecting to api!');
        });
    }
  }
})();
