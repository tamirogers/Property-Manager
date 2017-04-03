(function() {
    'use strict';

    angular
        .module('propertyApp')
        .controller('PropertyDetailController', PropertyDetailController);

    PropertyDetailController.$inject = ['UserFactory', 'toastr', '$stateParams'];

    /* @ngInject */
    function PropertyDetailController(UserFactory, toastr, $stateParams) {
        var pc = this;
        pc.title = 'PropertyDetailController';

        // vm.propertyResults = $stateParams.allProperties;

        // activate();

        ////////////////


        // UserFactory.  Function fires on button on propertygrid.html when prop managers enter new properties
        pc.searchProperties = function() {
              pc.City = $stateParams.searchCityString;
              pc.Zip = $stateParams.searchZipString;
            pc.MinRent = $stateParams.searchMinRentString;
            pc.MaxRent = $stateParams.searchMaxRentString;

            console.log($stateParams);

        

            UserFactory.GetSearchedProperties(pc.City, pc.Zip, pc.MinRent, pc.MaxRent).then(
                function(response) {
                    pc.propertyResponse = response.data;
                    console.log(response);

                    toastr.success('Here are search results.');

                },

                function(error) {
                    if (error.data) {
                        toastr.error('there was an error' + error.data);

                    } else {
                        toastr.info('no data');
                    }
                }
            )


        }
         pc.searchProperties();

       
    }
})();