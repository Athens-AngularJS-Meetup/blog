angular
    .module('myApp')
    .component('contact', {
        templateUrl: 'app/templates/contact.template.html',
        controller: function() {
            var self = this;
            self.messageSent = false;
            self.user = {
                name: '',
                email: '',
                message: ''
            };
            self.submit = function(isValid) {
                if (isValid) {
                    self.messageSent = true;
                    console.log('form is valid');
                } else {
                    console.log('form is invalid');
                }
            };
        }
    });
