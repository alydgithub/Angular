angular.module("computer",['ngRoute'])
.config(
['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
  $routeProvider.
  when('/main',
  {
      templateUrl:'views/main.html',
      controller:'MainCtrl'
   }
  ).
  when('/about',
  {
      templateUrl:'views/about.html',
      controller:'AboutCtrl'
   }
  ).
  when('/contact',
  {
      templateUrl:'views/contact.html',
      controller:'ContactCtrl'
   }
  ).
  when('/services',
  {
      templateUrl:'views/services.html',
      controller:'ServicesCtrl'
   }
  ).
  otherwise({redirectTo:'/main'})

 
}])

