app.controller('CityController', function($scope, $routeParams, forecast){
	$scope.oops = 'oops';
	forecast.success(function(data) { 
		$scope.cities = data; 
	});

});