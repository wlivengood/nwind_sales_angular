var acme = angular.module('acme', ['ui.router']);

acme.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/home.html'
		})
		.state('regions', {
			url: '/regions',
			templateUrl: '/region/regions.html',
			controller: 'RegionsListCtrl'
		})
		.state('salesPeople', {
			url: '/salesPeople',
			templateUrl: '/salesPerson/salesPeople.html',
			controller: 'SalesPersonListCtrl'
		});

		$urlRouterProvider.when('', '/');
});