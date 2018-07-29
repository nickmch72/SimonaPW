angular.module('SimonaPW', [
  'ngRoute',
  'mobile-angular-ui',
  'SimonaPW.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});