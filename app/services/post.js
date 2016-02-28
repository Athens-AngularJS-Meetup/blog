angular
    .module('myApp')
    .factory('Post', ['$http', function($http) {
        var service = {
            all: all,
            get: get
        };

        return service;

        function all() {
            return $http
                .get('http://jsonplaceholder.typicode.com/posts')
                .then(function(data) {
                    return data.data;
                });
        }


        function get(id) {
            return $http
                .get('http://jsonplaceholder.typicode.com/posts/' + id)
                .then(function(data) {
                    return data.data;
                });
        }
    }]);
