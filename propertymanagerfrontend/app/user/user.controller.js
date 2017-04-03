(function() {
    'use strict';

    angular
        .module('propertyApp')
        .controller('UserController', UserController);

    UserController.$inject = ['UserFactory', 'toastr'];

    /* @ngInject */
    function UserController(UserFactory, toastr) {
        var vm = this;
        vm.title = 'UserController';

         vm.linkHome = "Home";
         vm.linkPropSearch = "Search for a Property";
      
        //  vm.links = [
        // 'Home', 'Property Search', 'Register'
        // ]


        // activate();

        ////////////////


// POST From UserFactory.  Function fires on button on register.html when new users register
        vm.itemsToDatabase = function() {
            var newUser = {
                            'UserName': vm.UserName, 
                            'FirstName': vm.FirstName,
                            'LastName': vm.LastName,
                            'email': vm.email,
                            'IsPropertyManager': vm.TrueFalse
                        }

            UserFactory.postItems(newUser).then(
                function(response) {

                    toastr.success('Your user account has been created and moved to the database.');

                },

                function(error) {
                    if (error.data) {
                        toastr.error('there was an error' + error.data);

                    } else {
                        toastr.info('no data');
                    }
                }
            )
        
             vm.UserName = '';
             vm.FirstName = '';
             vm.LastName = '';
             vm.email = '';
             vm.TrueFalse = '';


        };


}


})();