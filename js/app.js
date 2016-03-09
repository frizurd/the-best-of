var app = angular.module('singleApp', ['ngRoute']);

app.config(function($routeProvider){
	
	$routeProvider
		.when('/', {
			controller: "MainController",
			templateUrl: "views/home.html"
		})
		.when('/quotes/:id', {
			controller: "MainController",
			templateUrl: "views/detail.html"
		})
		.when('/about', {
			controller: "DetailController",
			templateUrl: "views/about.html"
		})
		.otherwise({
			redirectTo: '/'
		});

});