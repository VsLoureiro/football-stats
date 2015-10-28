(function () {
  'use strict';

  angular
    .module('footballStats')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1446031204049;
    vm.showToastr = showToastr;
    vm.showCaption = false;

    activate();

    function activate() {
      getWebDevTec();
      var promise = $timeout(function () {
        vm.classAnimation = 'fadeInDown';
        vm.showCaption = true;
      }, 300);

      $timeout(function () {
        vm.classAnimation = '';
        $timeout.cancel(promise);
      }, 1000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function (awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
