angular
	.module('myApp')
	.factory('postService', postService);

postService.$inject = ['$http'];

function postService($http) {
	return service = {
		all: all,
		get: get
	};

	function all() {
		return $http
			.get('http://jsonplaceholder.typicode.com/posts')
			.then(function(data) {
				return data.data;
			})
			.catch(function(err) {

			});
	}


	function get(id) {
		return $http
			.get('http://jsonplaceholder.typicode.com/posts/' + id)
			.then(function(data) {
				return data.data;
			})
			.catch(function(err) {

			});
	}
}
