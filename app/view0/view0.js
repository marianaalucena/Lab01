'use strict';

angular.module('myApp.view0', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view0', {
    templateUrl: 'view0/view0.html',
    controller: 'View0Ctrl'
  });
}])

.controller('View0Ctrl', ["$scope", function($scope) {
}