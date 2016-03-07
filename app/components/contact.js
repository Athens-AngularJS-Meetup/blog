angular
    .module('myApp')
    .component('contact', {
        templateUrl: 'app/templates/contact.html',
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
                    setPristineForm(self);
                } else {
                    setDirtyForm(self);
                }
            };
        }
    });

    function setPristineForm(self) {
        self.contactForm.name.$setPristine();
        self.contactForm.email.$setPristine();
        self.contactForm.message.$setPristine();
    }

    function setDirtyForm(self) {
        self.contactForm.name.$setDirty();
        self.contactForm.email.$setDirty();
        self.contactForm.message.$setDirty();
    }
