app.controller('MainController', function($scope, $routeParams, $http){

  $scope.searchFood = "Food";
  $scope.searchCity = "City";

  $scope.curFood = $routeParams.food;
  $scope.curCity = $routeParams.city;

  $http.get('http://topoftheline.azurewebsites.net/api/cities')
  .then(function(response) {
    $scope.cities = response.data;
  });

  $http.get('http://topoftheline.azurewebsites.net/api/foods')
  .then(function(response) {
    $scope.foods = response.data;
  });

  $scope.currentFood = function(name) {
    $scope.searchFood = name;
  };

  $scope.currentCity = function(name) {
    $scope.searchCity = name;
  };

  $scope.link = function (path) {
    $location.path(path);
  };

});
