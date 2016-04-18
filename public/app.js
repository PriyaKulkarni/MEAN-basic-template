//Here goes your angular setup code

//create a module
var app = angular.module('app',[]);

app.controller("appCtrl", function($scope) {
            $scope.message = "Hello World!";
         });
//create a controller
//function appCtrl($scope) {
	//user functions here
//};