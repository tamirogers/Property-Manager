(function() {
    'use strict';

    angular
        .module('propertyApp')
        .controller('PropertyController', PropertyController);

    PropertyController.$inject = ['PropertyFactory', 'toastr', '$stateParams'];

    /* @ngInject */
    function PropertyController(PropertyFactory, toastr, $stateParams) {
        var vm = this;
        vm.title = 'PropertyController';

        // vm.propertyResults = $stateParams.allProperties;

        // activate();

        ////////////////


        // POST From PropertyFactory.  Function fires on button on propertygrid.html when prop managers enter new properties
        vm.NewPropertyToDatabase = function() {
            var newProperty = {
                        
                            'UserId': vm.UserId,
                            'PropertyName' : vm.PropertyName,
                            'AddressOne' : vm.AddressOne,
                            'AddressTwo' : vm.AddressTwo,
                            'City' : vm.City,
                            'State' : vm.State,
                            'Phone' : vm.Phone,
                            'Rent': vm.Rent,
                            'SquareFootage' : vm.SquareFootage,
                            'Bedrooms' : vm.Bedrooms,
                            'Baths' : vm.Baths,
                            'LeaseTerm' : vm.LeaseTerm

                            
                          
                        
                            // 'IsPropertyManager': vm.TrueFalse
                        }

            PropertyFactory.PostNewProperties(newProperty).then(
                function(response) {

                    toastr.success('Your new property has been added to the database.');

                },

                function(error) {
                    if (error.data) {
                        toastr.error('there was an error' + error.data);

                    } else {
                        toastr.info('no data');
                    }
                }
            )
        
             // vm.UserName = '';
             // vm.FirstName = '';
             // vm.LastName = '';
             // vm.email = '';
             // vm.TrueFalse = '';


        };

       
    }
})();