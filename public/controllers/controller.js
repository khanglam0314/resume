var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http',
		function($scope, $http){
			console.log("Hello World from controller");

		var refresh1 = function() {
		  $http.get('/resume/edu').success(function(response) {
		    console.log("I got the data I requested");
		    $scope.resume1 = response;
		  });
		};
		refresh1();

		var refresh2 = function() {
		  $http.get('/resume/skill').success(function(response) {
		    console.log("I got the data I requested");
		    $scope.resume2 = response;
		  });
		};
		refresh2();

		var refresh3 = function() {
		  $http.get('/resume/project').success(function(response) {
		    console.log("I got the data I requested");
		    $scope.resume3 = response;
		  });
		};
		refresh3();
}]);

// any thing in controller.js running inside the browser
//server and controller don't need to know anything about each other	
	