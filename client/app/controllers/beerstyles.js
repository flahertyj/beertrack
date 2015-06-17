'use strict';

angular.module('myApp.beerstyles', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/beerstyles', {
    templateUrl: 'views/beerstyles.html',
    controller: 'BeerStylesCtrl'
  });
}])

.controller('BeerStylesCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('json/beerstyles.json').success(function(data) {
    $scope.beerstyles = data;
  });
}]);
