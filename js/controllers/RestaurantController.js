app.controller('RestaurantController', function($scope, $routeParams, $http){

  $http.get("http://topoftheline.azurewebsites.net/api/restaurants")
      .then(function (response) {
        $scope.restaurants = response.data;
  });
});
