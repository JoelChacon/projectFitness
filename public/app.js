var app = angular.module('actvApp', ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/')
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: "html/home.html"
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