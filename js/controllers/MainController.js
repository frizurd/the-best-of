app.controller('MainController', function($scope, $routeParams, $http){

  $scope.foodID = $routeParams.food;
  $scope.cityID = $routeParams.city;

  $http.get('http://topoftheline.azurewebsites.net/api/cities')
  .then(function(response) {
    $scope.cities = response.data;
  });

  $http.get('http://topoftheline.azurewebsites.net/api/foods')
  .then(function(response) {
    $scope.foods = response.data;
  });

  $http.get('http://topoftheline.azurewebsites.net/api/restaurants/'+ $scope.foodID + '/' +$scope.cityID)
  .then(function(response) {
    $scope.restaurants = response.data;
  });

  $scope.setFood = function(food) {
    $scope.currFood = food;
  };

  $scope.setCity = function(city) {
    $scope.currCity = city;
  };

});
