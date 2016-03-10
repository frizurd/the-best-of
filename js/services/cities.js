app.factory('cities', ['$http', function($http) {
  return {
    getCities: function(){
      return $http.get('http://topoftheline.azurewebsites.net/api/cities')
                .success(function(data) {
                  return data;
                })
                .error(function(err) {
                  return err;
                });
    }/*,
    saveCity: function($params){
      var data = $.param({
               city: $scope.city,
           });

     var config = {
              headers : {
                  'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
              }
          };
      return http.post('http://topoftheline.azurewebsites.net/api/cities', data, config)
                .succes(function(){
                  $scope.PostDataResponse = data;
                })
    }*/



  };
}]);
