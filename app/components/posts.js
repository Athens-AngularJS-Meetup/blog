angular
    .module('myApp')
    .component('posts', {
        templateUrl: 'app/templates/posts.html',
        bindings: {
            posts: '='
        },
        controller: function() {
            var self = this;
            self.posts = self.posts.slice(0, 5);
        }
    });
