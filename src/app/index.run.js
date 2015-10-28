(function() {
  'use strict';

  angular
    .module('footballStats')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
