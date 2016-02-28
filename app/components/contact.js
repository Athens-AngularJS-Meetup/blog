angular
    .module('myApp')
    .component('contact', {
        templateUrl: 'app/templates/contact.html',
        controller: function($scope, $element, $attrs) {
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
                    setPristineForm($scope);
                } else {
                    setDirtyForm($scope);
                }
            };
        }
    });

    function setPristineForm($scope) {
        $scope.contactForm.name.$setPristine();
        $scope.contactForm.email.$setPristine();
        $scope.contactForm.message.$setPristine();
    }

    function setDirtyForm($scope) {
        $scope.contactForm.name.$setDirty();
        $scope.contactForm.email.$setDirty();
        $scope.contactForm.message.$setDirty();
    }
