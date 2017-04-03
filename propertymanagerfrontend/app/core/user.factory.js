(function() {
    'use strict';

    angular
        .module('propertyApp')
        .factory('UserFactory', UserFactory);

    UserFactory.$inject = ['$http','$q','baseAPI', '$stateParams'];

    /* @ngInject */
    function UserFactory($http, $q, baseAPI, $stateParams) {

        //must call all these services/functions from below
        var service = {
            postItems: postItems,
            getLocation: getLocation,
            GetSearchedProperties: GetSearchedProperties

            // getProperties: getProperties
        };
        return service;

        ////////////////



//Goes to SearchController.  Returns prop managers properties from UserName sign in.
        function getLocation(findLocation) {
            var defer = $q.defer();

            $http({
                method: 'GET',

                url: baseAPI + "Properties/Username",

                // headers: {  },

                params: { 'UserName' : findLocation }

            })

            .then(function(response) {
                    if (typeof response.data === "object") {
                        defer.resolve(response);
                    } else {
                        defer.reject(response);
                    }
                },

                function(error) {
                    console.log(error);
                    defer.reject(error);

                });
            return defer.promise;
        }



//POST goes to UserController.  Posts new users back to API Users Controller. Data from registration page on register.html
        function postItems(newuserpost) {
            var defer = $q.defer();

            $http({
                    method: 'POST',
                    url: baseAPI + "Users",
                   
               
                    data: newuserpost

                })

                .then(function(response) {
                        if (typeof response.data === "object") {
                            defer.resolve(response);
                        } else {
                            defer.reject(response);
                        }
                    },

                    function(error) {
                        console.log(error + "There was no contact with the database.");
                        defer.reject(error);

                    });
            return defer.promise;
        }





//connects to SearchController.  After users enter a search for listing, GET returns all properties to SearchGrid
        function GetSearchedProperties(searchCity, searchZip, searchMinRent, searchMaxRent) {
            var defer = $q.defer();

            $http({
                method: 'GET',

                url: baseAPI + "Properties/Filter",
  

                // headers: {  },

                params: { 
     
                    'City' : searchCity,
                    'Zip' : searchZip,
                    'MinRent' : searchMinRent,
                    'MaxRent' : searchMaxRent
                    // 'Rent' : searchRent
            }

            })

            .then(function(response) {
                    if (typeof response.data === "object") {
                        defer.resolve(response);
                    } else {
                        defer.reject(response);
                    }
                },

                function(error) {
                    console.log(error);
                    defer.reject(error);

                });
            return defer.promise;
        }





//From SearchFactory, search.html, PUT to PropertiesController in Visual Studio
        //          function putItems(UserNameReturned) {
        //     var defer = $q.defer();

        //     console.log(ChangedProperty);

        //     $http({
        //             method: 'PUT',
        //             url:   baseAPI + "Properties/5",
        //             data: ChangedProperty
        //             // config: 

        //         })

        //         .then(function(response) {

        //                 if (typeof response.data === "object") {
        //                     defer.resolve(response);
        //                     console.log(response + "Success, the item is updated.");
        //                 } else {
        //                     defer.reject(response);
        //                 }
        //             },

        //             function(error) {
        //                 console.log(error + "Problem with this item, it did not update.");
        //                 defer.reject(error);

        //             });
        //     return defer.promise;
        // }





    }
})();


//         function getOther(otherId) {
//             var defer = $q.defer();

//             $http({
//                     method: 'GET',
//                     url: "https://sun.p.mashape.com/api/sun/",
//                     headers: { 'X-Mashape-Key': 'Orq0VygS0VmshL4xqc1mMAHsdTw9p1gdE6ZjsnfpnZ1ieBPxyf',
//                     'Accept': 'application/json'},
//                     params: { 'city': otherId }



//                     // 'Authorization': 'Basic Og==',
//                     // 'Authorization': 'Basic Ok1weUhxZ1hXWVZtc2gxUkF2VGUzMXlVVzJFV2dwMWc3dFg3anNuczE1djVuTkJtOVB3'}
// // /networks.json
//                     // params: { 'q[city_cont]': findLocation }

//                 })

//                 .then(function(response) {
//                         if (typeof response.data === "object") {
//                             defer.resolve(response);
//                         } else {
//                             defer.reject(response);
//                         }
//                     },

//                     function(error) {
//                         console.log(error);
//                         defer.reject(error);

//                     });
//             return defer.promise;
//         }

