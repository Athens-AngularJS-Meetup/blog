angular
	.module('myApp')
	.config(config);

config.$inject = ['$routeProvider'];

function config($routeProvider) {
	$routeProvider
		.when('/', {
			resolve: {
				posts: postsPrepService
			},
			template: '<posts posts="$resolve.posts"></posts>'
		})
		.when('/posts/:postID', {
			resolve: {
				post: postPrepService
			},
			template: '<post post="$resolve.post"></post>'
		})
		.when('/contact', {
			template: '<contact></contact>'
		})
		.otherwise({
			redirectTo: '/'
		});
}

postsPrepService.$inject = ['postService'];

function postsPrepService(postService) {
	return postService.all();
}

postPrepService.$inject = ['postService', '$route'];

function postPrepService(postService, $route) {
	return postService.get($route.current.params.postID);
}
