angular.module("computer")
.controller("MainCtrl",['$scope','$http',function($scope,$http){

  $http.get('services.json').then(function(res){
     $scope.services=res.data;
     });

}])
.controller('ServicesCtrl', ['$scope', '$http', function($scope, $http){
   $http.get('services.json').then(function(res){
     $scope.services=res.data;
     });

 
}])
.controller("AboutCtrl",['$scope','$http',function($scope){
console.log('this is  AboutCtrl');
}])



.controller("ContactCtrl",['$scope','$http',function($scope,$http){
 
 $http.get('locations.json').then(function(res){
     $scope.locations=res.data;
     });


}]);
