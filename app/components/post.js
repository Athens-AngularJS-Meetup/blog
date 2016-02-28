angular
    .module('myApp')
    .component('post', {
        templateUrl: 'app/templates/post.html',
        bindings: {
            post: '<'
        },
        controller: function() {
            var self = this;
            self.img = 'http://lorempixel.com/600/300/city/';
        }
    });
