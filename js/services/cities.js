app.factory('forecast', ['$http', function($http) { 
  return $http.get('http://topoftheline.azurewebsites.net/api/cities') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);

