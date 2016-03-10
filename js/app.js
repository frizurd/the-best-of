var app = angular.module('singleApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){

	$routeProvider
		.when('/', {
			controller: "MainController",
			templateUrl: "views/home.html"
		})
		.when('/search/:food/:city', {
			controller: "MainController",
			templateUrl: "views/result.html"
		})
		.when('/about', {
			controller: "DetailController",
			templateUrl: "views/about.html"
		})
		.otherwise({
			redirectTo: '/'
		});

});
