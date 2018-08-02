angular
	.module('app')
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				controller: 'HomeController as ctrl',
				template: `
					<p>{{ ctrl.viewName }}</p>
				`
			})
			.state('about', {
				url: '/about',
				controller: 'AboutController as ctrl',
				template: `
					<p>{{ ctrl.viewName }}</p>
				`
			});
			$urlRouterProvider.otherwise('/');
	});


// config is a special method that allows to create logic that runs when angular loads
// $stateProvider is dependency expose by the ui router
// $urlRouterProvider to create router set up
//
//