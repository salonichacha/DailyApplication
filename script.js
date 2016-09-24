var myApp = angular.module('emailApp',['ngRoute']);

myApp.config(function($routeProvider){

		$routeProvider
				.when('/',{
					templateUrl: 'pages/my-Home.html',
					controller: 'emailController'
				})

				.when('/welcome',{
					templateUrl: 'pages/welcome.html',
					controller: 'welcomeController'
				})
});

myApp.controller('emailController',['$scope','$location',function($scope, $location, $element){

		$scope.correct = false;
		$scope.userDetails = [
			{userName: "saloni", userPassword: "abc",id:1},
			{userName: "admin", userPassword: "admin",id:2},
			{userName: "anoop", userPassword: "a",id:3}
		]

		$scope.userAuth = function(){	
		var isaUser = false;

		for(var i = 0 ; i < $scope.userDetails.length; i++){
			if($scope.inputEmail == $scope.userDetails[i].userName && $scope.inputPassword == $scope.userDetails[i].userPassword){
				isaUser = true;
			}
		}

		if(isaUser == true){
				$location.path('/welcome');
		}

		else{
			$scope.correct = true;
			var el1 = angular.element( document.querySelector( '.form-group' ) );
			el1.removeClass('has-success')
			el1.addClass('has-error  has-feedback');	
			$location.path('/');

		}
	}
}]);		


myApp.controller('welcomeController',['$scope', function($scope){

}]);