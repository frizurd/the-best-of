app.factory('instagram', ['$http', function($http) {
        return {
            fetchInsta: function(callback) {

                var accessToken = "16384709.6ac06b4.49b97800d7fd4ac799a2c889f50f2587";
                var url = "https://api.instagram.com/v1/tags/baklava/media/recent?client_id="+accessToken+"&access_token="+accessToken+"&callback=JSON_CALLBACK";

                $http.jsonp(url).success(function(response) {
                    callback(response.data);
                });
            }
        };
    }
]);
