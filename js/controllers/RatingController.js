app.controller('RatingController', function($scope, $routeParams, $http){

  $http.get("http://topoftheline.azurewebsites.net/api/ratings")
      .then(function (response) {$scope.ratings = response.data;
  });

  $scope.getRestaurant = function(id){
    $http.get("http://topoftheline.azurewebsites.net/api/restaurants/" + id)
        .then(function (response) {
          $scope.restaurants = response.data;
    });
  };

  // $scope.getWeather = function(name){
  //   $http.get("http://api.openweathermap.org/data/2.5/weather?q="+name+"&APPID=0a428b5c38663d2e228b963da361ab22")
  //   .then(function (response){
  //     $scope.weathers = response.data;
  //     console.log($scope.weathers);
  //   });
  // };

});


//api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=0a428b5c38663d2e228b963da361ab22
