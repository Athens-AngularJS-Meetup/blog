angular
    .module('myApp')
    .component('posts', {
        templateUrl: 'app/templates/posts.template.html',
        bindings: {
            posts: '='
        },
        controller: function() {
            var self = this;
            self.posts = self.posts.slice(0, 5);
        }
    });
