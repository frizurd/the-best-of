app.controller('CityController', function($scope, $routeParams, cities,$http){

	$scope.getAllCities = function(){
		cities.getCities().success(function(data) {
			$scope.cities = data;
		});
	};

	$scope.sendPost = function() {
		$http({
		 method: 'POST',
		 url: 'http://topoftheline.azurewebsites.net/api/cities',
		 data: {"Name": $scope.city},
	}).then(function successCallback(response) {
			$scope.cities.push(response.data);
			$scope.city = '';
	 }, function errorCallback(response) {

	 });

 };

 $scope.deleteCity = function(id, index){
	 $http({
		method: 'DELETE',
		url: 'http://topoftheline.azurewebsites.net/api/cities/' + id,
 }).then(function successCallback(response) {
	 	$scope.cities.splice(index, 1);
	}, function errorCallback(response) {
		console.log("cannot delete, id: " + id + "index: " + index);
	});
};


// $scope.getSelectedCity = function(id){
// 	$http({
// 	 method: 'GET',
// 	 url: 'http://topoftheline.azurewebsites.net/api/cities/' + id,
// }).then(function successCallback(response) {
// 	 $scope.cityToUpdate = response.data.CityID;
// 	 $scope.cityNameInput = response.data.Name;
//  }, function errorCallback(response) {
//
//  });
//  };

 $scope.saveSelectedCity = function(id, name){
	 $scope.selectedId = id;
	 $scope.selectedName = name;
 };

$scope.updateCity = function(id){

	$http({
	 method: 'PUT',
	 url: 'http://topoftheline.azurewebsites.net/api/cities/' + id,
	 data: {CityID:$scope.selectedId,Name:$scope.selectedName}
	}).then(function successCallback(response) {
			$scope.cities = response;
	}, function errorCallback(response) {
		console.log(id);
	});

};

});
