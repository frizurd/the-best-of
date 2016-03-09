var app = angular.module('singleApp', ['ngRoute']);

app.config(function($routeProvider){
	
	$routeProvider
		.when('/', {
			controller: "MainController",
			templateUrl: "views/home.html"
		})
		.when('/cities', {
			controller: "MainController",
			templateUrl: "views/cities.html"
		})
		.otherwise({
			redirectTo: '/'
		});

});