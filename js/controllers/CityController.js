app.controller('CityController', function($scope, $routeParams, cities,$http){
	cities.getCities().success(function(data) {
		$scope.cities = data;
	});

	$scope.sendPost = function() {
		$http({
		 method: 'POST',
		 url: 'http://topoftheline.azurewebsites.net/api/cities',
		 data: {"Name": $scope.city},
	}).then(function successCallback(response) {

	 }, function errorCallback(response) {

	 });
 };

 $scope.deleteCity = function(id){
	 $http({
		method: 'DELETE',
		url: 'http://topoftheline.azurewebsites.net/api/cities/' + id,
 }).then(function successCallback(response) {

	}, function errorCallback(response) {

	});
 }

});
