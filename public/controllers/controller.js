var app = angular.module('email', []);
app.controller('emailSend', function($scope,$http) {

	console.log("email send ");

	$scope.send=function(){
		
		var values =[];

		values = $scope.email
		console.log(values);
		$http.post('/send',values).success(function (respose){
			console.log("resposne:"+respose);
		});

		
	}
   
});