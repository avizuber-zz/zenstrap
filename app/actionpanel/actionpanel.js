'use strict';
var $scope, $location;
var app = angular.module('myApp.actionpanel', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/actionpanel', {
    templateUrl: 'actionpanel/actionpanel.html',
    controller: 'ActionPanelCtrl'
  });
}]);
  
app.controller('ActionPanelCtrl', ['$scope', '$location', '$anchorScroll',
    function ($scope, $location, $anchorScroll) {
      $scope.goToAnchor = function(id) {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash(id);

        // call $anchorScroll()
        $anchorScroll();
      };
  }]);

