/**
 * Created by vloureiro on 20/11/2015.
 */

(function () {
  'use strict';

  angular.module('footballStats').service('footballData', footballData);

  /** @ngInject */
  function footballData($http) {
    var urlMappings = {
      'BL1': function () {
        return 'bundesliga-logo.png'
      },
      'FL1': function () {
        return 'ligue1-logo.png'
      },
      'PL': function () {
        return 'premier_league.png'
      },
      'PD': function () {
        return 'la-liga-logo.png'
      },
      'SA': function () {
        return 'serie-a-logo.png'
      },
      'PPL': function () {
        return 'liga-portugal-logo.png'
      },
      'DED': function () {
        return 'eredivisie-logo.png'
      },
      'CL': function () {
        return 'champions-league-logo.png'
      }
    };
    var apiUrl = 'http://api.football-data.org/v1/';

    function doRequest(url, method) {
      return $http({
        method: method,
        cache: true,
        url: url,
        headers: {
          'X-Auth-Token': 'd621ef8417ae4bd185729d3d3e126079'
        }
      });
    }

    this.getLeagues = function () {
      return doRequest(apiUrl + 'soccerseasons', 'GET');
    };

    this.addLogosProperty = function (leagues) {
      var leagueList = [];
      for (var i = 0; i < leagues.data.length; i++) {
        var league = leagues.data[i];
        if (angular.isDefined(urlMappings[league.league])) {
          league.logo = urlMappings[league.league]();
          leagueList.push(league);
        }
      }

      return leagueList;
    };

    this.getLeagueTable = function (leagueId) {
      return doRequest(apiUrl + 'soccerseasons/' + leagueId + '/leagueTable', 'GET');
    };

    return {
      getLeagues: this.getLeagues,
      getLeagueTable: this.getLeagueTable,
      addLogosProperty: this.addLogosProperty
    }
  }

})();
