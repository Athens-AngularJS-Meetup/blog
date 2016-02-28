angular
    .module('myApp')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                resolve: {
                    posts: function(Post) {
                        return Post.all();
                    }
                },
                template: '<posts posts="$resolve.posts"></posts>',
                title: 'Posts'
            })
            .when('/posts/:postID', {
                resolve: {
                    post: function(Post, $route) {
                        return Post.get($route.current.params.postID);
                    }
                },
                template: '<post post="$resolve.post"></post>',
                title: 'Single Post'
            })
            .when('/contact', {
                template: '<contact></contact>',
                title: 'Contact Me'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
    .run(['$rootScope', function($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
            $rootScope.title = current.$$route.title;
        });
    }]);
