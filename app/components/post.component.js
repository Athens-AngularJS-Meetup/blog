angular
    .module('myApp')
    .component('post', {
        templateUrl: 'app/templates/post.template.html',
        bindings: {
            post: '<'
        },
        controller: function() {
            var self = this;
            self.img = 'http://lorempixel.com/600/300/city/';
        }
    });
