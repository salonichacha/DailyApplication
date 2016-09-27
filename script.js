var myApp = angular.module('emailApp',['ngRoute']);

myApp.service('emailService', function () {
		 var product = {};
		 var user = {};
		 return {
            getProduct: function () {
                return product;
            },
            setProduct: function(value) {
                product = value;
            },
			getUser: function () {
                return user;
            },
            setUser: function(value) {
                user = value;
            }
        };
    })



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

myApp.controller('emailController',['$scope','$location','emailService',function($scope, $location, emailService, $element){

		$scope.correct = false;
		
		$scope.userDetails = [
			{userName: "saloni", userPassword: "abc",id:1},
			{userName: "nirav", userPassword: "abc",id:2},
			{userName: "admin", userPassword: "admin",id:3},
			{userName: "anoop", userPassword: "a",id:4}
		]

		$scope.userAuth = function(username){	
	
		var isaUser = false;

		for(var i = 0 ; i < $scope.userDetails.length; i++){
			if($scope.inputEmail == $scope.userDetails[i].userName && $scope.inputPassword == $scope.userDetails[i].userPassword){
				isaUser = true;
			}
		}

		if(isaUser == true){
				emailService.setUser(username);
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


myApp.controller('welcomeController', ['$scope', 'emailService', function($scope, emailService){
	console.log("her");
	$scope.username = emailService.getUser();
	
	$scope.userEmails = { 
    saloni : [
    	{emailId: 1, emailSender:"admin@walmart.com", emailReceiver:"s@admin.com", emailHeader: "Walmart", emailSnippet: "WalMart offers", time: "14:15" , emailBody:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"},
    	{emailId: 2, emailHeader: "Amazon", emailSnippet: "WalMart offers",  time: "12:15"},
    	{emailId: 3, emailHeader: "Amazon.in", emailSnippet: "WalMart offers",  time: "1:19"},
    	{emailId: 4, emailHeader: "Amazon.com", emailSnippet: "WalMart offers", time: "5:40"},
    	{emailId: 5, emailHeader: "Tmobile", emailSnippet: "WalMart offers",  time: "4:15"},
    	{emailId: 6, emailHeader: "linkedIn", emailSnippet: "WalMart offers",  time: "17:15"},
    	{emailId: 7, emailHeader: "Walmart", emailSnippet: "WalMart offers",  time: "18:15"}

    	],

   nirav : [
    	{emailId: 1, emailHeader: "Paypal", emailSnippet: "WalMart offers", time: "14:15"},
    	{emailId: 2, emailHeader: "At&t", emailSnippet: "WalMart offers",  time: "12:15"},
    	{emailId: 3, emailHeader: "AIG", emailSnippet: "WalMart offers",  time: "1:19"},
    	{emailId: 4, emailHeader: "Amazon.uk", emailSnippet: "WalMart offers", time: "5:40"},
    	{emailId: 5, emailHeader: "Facebook", emailSnippet: "WalMart offers",  time: "4:15"},
    	{emailId: 6, emailHeader: "yahoo", emailSnippet: "WalMart offers",  time: "17:15"},
    	{emailId: 7, emailHeader: "Walmart", emailSnippet: "WalMart offers",  time: "18:15"}

    	],

    admin : [
    	{emailId: 1, emailHeader: "abc", emailSnippet: "WalMart offers", time: "14:15"},
    	{emailId: 2, emailHeader: "American Greetings", emailSnippet: "WalMart offers",  time: "12:15"},
    	{emailId: 3, emailHeader: "Disney", emailSnippet: "WalMart offers",  time: "1:19"},
    	],

    anoop : [
    	{emailId: 1, emailHeader: "Bank of America", emailSnippet: "WalMart offers", time: "14:15"},
    	{emailId: 2, emailHeader: "Chase", emailSnippet: "WalMart offers",  time: "12:15"},
    	{emailId: 3, emailHeader: "Wells Fargo", emailSnippet: "WalMart offers",  time: "1:19"},
    	{emailId: 4, emailHeader: "Protek", emailSnippet: "WalMart offers", time: "5:40"},
    	{emailId: 5, emailHeader: "Staffing", emailSnippet: "WalMart offers",  time: "4:15"},
    	{emailId: 6, emailHeader: "FOX", emailSnippet: "WalMart offers",  time: "17:15"},
    ] 

};
		console.log($scope.userEmails[$scope.username][0].emailId);

		$scope.foundUserEmail = $scope.userEmails[$scope.username];

		$scope.choosenEmail = function(id){
				$scope.choosenDetails = id;
		}

}]);