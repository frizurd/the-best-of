var app = angular.module('singleApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){

	$routeProvider
		.when('/', {
			controller: "MainController",
			templateUrl: "views/home.html"
		})
		.when('/restaurants/:food/:city', {
			controller: "MainController",
			templateUrl: "views/result.html"
		})
		.when('/about', {
			controller: "DetailController",
			templateUrl: "views/about.html"
		})
		.when('/cities', {
			controller: "CityController",
			templateUrl: "views/cities.html"
		})
		.otherwise({
			redirectTo: '/'
		});


});
