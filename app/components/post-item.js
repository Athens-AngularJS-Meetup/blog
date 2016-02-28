angular
    .module('myApp')
    .component('postItem', {
        templateUrl: 'app/templates/post-item.html',
        bindings: {
            post: '<'
        },
        controller: function() {
            var self = this;
            self.img = 'http://lorempixel.com/600/300/city/';
        }
    });
