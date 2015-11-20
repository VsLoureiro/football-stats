/**
 * Created by vloureiro on 20/11/2015.
 */

(function() {
  'use strict';

  angular
    .module('footballStats')
    .service('footballData', footballData);

  /** @ngInject */
  function footballData() {
    var footballLeaguesData = [
      {
        'title': 'Premier League',
        'id': '398',
        'url': 'https://angularjs.org/',
        'description': 'Premier League',
        'logo': 'premier_peague.png'
      }
    ];

    this.getTec = getTec;

    function getTec() {
      return footballLeaguesData;
    }
  }

})();
