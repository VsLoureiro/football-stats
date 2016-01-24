(function () {
  'use strict';

  angular
    .module('footballStats')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
        creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment) {
      var vm = this;
      vm.homeActive = 'active';
      vm.aboutActive = '';
      vm.activate = function (name) {
        switch (name) {
          case 'home':
            vm.aboutActive = '';
            vm.homeActive = 'active';
            break;
          case 'about':
            vm.homeActive = '';
            vm.aboutActive = 'active';
            break;
        }
      };

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
