var app = angular.module('actvApp', [/*'auth0','angular-storage', 'angular-jwt', 'ngMaterial', */'ui.router', 'ui.bootstrap'])

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/')
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: "html/home.html"
		})
		.state('home2', {
			url: '/myModalContent',
			templateUrl: "html/myModalContent.html",
			controller: 'ModalInstanceCtrl'
		})
		.state('dashboard', {
			url: '/dashboard',
			templateUrl: 'html/dashboard.html',
			controller: 'clientCtrl'
		})
		.state('createClient', {
			url: '/createClient',
			templateUrl: 'html/createClient.html',
			controller: 'clientCtrl'
		})
		.state('clientProfile', {
			url:'/clientProfile',
			templateUrl: 'html/clientProfile.html'
		})
});
