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
      $scope.goToForm = function() {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('form');

        // call $anchorScroll()
        $anchorScroll();
      };
     $scope.class = "sidebar-offcanvas";
    
     $scope.changeClass = function(){
        if ($scope.class === "sidebar-offcanvas")
            $scope.class = "sidebar-offcanvas-open";
         else
            $scope.class = "sidebar-offcanvas";
     };

  }]);

