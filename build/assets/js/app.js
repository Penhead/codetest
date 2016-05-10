var app = angular.module('app', ["ui.router"]);

app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/contacts");
  $stateProvider.
   	state('contacts', {
      url: "/contacts",
	    controller: "ContactsController",
      templateUrl: "views/contacts.html"
    })
}]);