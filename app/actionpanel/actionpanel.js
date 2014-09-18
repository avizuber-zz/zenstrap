'use strict';

angular.module('myApp.actionpanel', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/actionpanel', {
    templateUrl: 'actionpanel/actionpanel.html',
    controller: 'ActionPanelCtrl'
  });
}])

.controller('ActionPanelCtrl', [function() {

}]);