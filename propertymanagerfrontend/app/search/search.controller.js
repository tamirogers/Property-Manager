(function() {
    'use strict';

    angular
        .module('propertyApp')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['UserFactory', 'toastr', '$state' ,'$timeout'];

    /* @ngInject */
    function SearchController(UserFactory, toastr, $state, $timeout) {
        var vm = this;
        vm.title = 'SearchController';


      
//GET function from UserFactory, brings property manager properties after UserName sign in.  Goes to search.html
        vm.UserNameHere = function(placePick) {
            UserFactory.getLocation(placePick).then(
                function(response) {


                    vm.UserNameReturned = response.data;
                    console.log(vm.UserNameReturned);

                    toastr.success('Take a look at your properties.');

                },

                function(error) {
                    if (error.data) {
                        toastr.error('there was an error' + error.data);

                    } else {
                        toastr.info('no data');
                    }
                }
            )
            // vm.findPlace is parameter in function on the button, the empty string clears the input field
            vm.findPlace = '';
        };






        vm.goToDetailsState = function() {


            //on search.html I have ng-model on input tags and saved into 

            // vm.city, vm.zip, vm.minRent, vm.maxRent

            // this function is being call on button click and it passes input values to details state and propertyController

            $state.go("propertydetail", {

                searchCityString: vm.City,
                searchZipString: vm.Zip,
                searchMinRentString: vm.MinRent,
                searchMaxRentString: vm.MaxRent

            });

        };




//PUT to UserFactory, from search.html.  Prop Managers make changes and update their properties
    //       vm.UpdateData = function (vm.UserNameReturned) {
    //         //from the ng-repeat
    // UserFactory.putItems(vm.UserNameReturned)
    //     .then(
    //             function(response) {
    //                 newTodo();
                    
    //                 console.log(response);

    //                 toastr.success('Your changes have been updated on the database.');

    //             },

    //             function(error) {
    //                 if (error.data) {
    //                     toastr.error('there was an error' + error.data);

    //                 } else {
    //                     // toastr.info('no data');
    //                 }
    //             }
    //         )    
            
    //     }







// //GET from UserFactory.  Brings all of the listings based on user search to search.grid
//         vm.PropertiesHere = function() {
//             UserFactory.getProperties(vm.City, vm.Zip, vm.MinRent, vm.MaxRent).then(
//                 function(response) {

//                      vm.PropertyNameReturned = response.data;
//                     console.log(vm.PropertyNameReturned);
                    
//                     toastr.success('Take a look at your properties.');              

//                 },

//                 function(error) {
//                     if (error.data) {
//                         toastr.error('there was an error' + error.data);

//                     } else {
//                         toastr.info('no data');
//                     }
//                 }
//             );
//             vm.returnProperties = '';

// //these are parameters in the button function, clears the input fields.
//             vm.City = '';
//             vm.Zip = '';
//             vm.Rent = '';

//         };

    }
})();
