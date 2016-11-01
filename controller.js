
var app = angular.module('spCart',[])
				 .controller("productsCtrl",function($scope, $http){
				 	debugger
						 $http({
								  method: 'GET',
								  url: 'https://hackerearth.0x10.info/api/fashion?type=json&query=list_products'
								}).then(function successCallback(response) {
								    $scope.myData=response.data.products;
								  }, function errorCallback(response) {
								    $scope.message="Error";
								  });
							$scope.IsVisible = false;
		            $scope.ShowHide = function () {
		                //If DIV is visible it will be hidden and vice versa.
		                $scope.IsVisible = $scope.IsVisible ? false : true;
		            }
			});

			