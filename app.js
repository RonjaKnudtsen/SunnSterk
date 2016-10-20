
angular.module('sunn_sterk.controllers', []); //Create a module with controllers, send this controller to the app.
//To use the controller: angular.module('sunn_sterk.controllers').controller('new-controller-name', function($scope...){...})
angular.module('sunn_sterk.services', []);
angular.module('sunn_sterk.directive', ['sunn_sterk.services']);

var app = angular.module('sunn_sterk', ['ui.router', 'sunn_sterk.controllers', 'sunn_sterk.services', 'sunn_sterk.directive','ngSanitize' ]);
/*
Hjem - Home 
Pakker - Packages
Programoversikt - Programs
Programbestilling - Programorder
*/

app.config(function($stateProvider, $urlRouterProvider){
  console.log("TEST");
  $stateProvider
  .state('home',{
    url: "/home",
    templateUrl: "templates/home.html",
    controller: "home-controller",
  })
  .state('home.edit', {
    url: "/home/edit",
    templateUrl: "templates/home-edit.html",
    controller: "home-controller",
  })
  .state('packages',{
    url: "/packages",
    controller: "package-controller",
    templateUrl: "templates/packages.html",
  })
  .state('package.edit', {
    url: "/edit",
    controller: "package-controller",
    templateUrl: "templates/packages.html"
  })
  .state('program',{
    url: "/program",
    templateUrl: "templates/program.html",
    controller: "program-controller",
   })
  .state('program.edit',{
    url: "/program/edit",
    templateUrl: "templates/program.html",
    controller: "program-controller",
  })
  
  $urlRouterProvider.otherwise('/home');
});
