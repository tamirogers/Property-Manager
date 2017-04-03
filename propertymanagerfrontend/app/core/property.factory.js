(function() {
    'use strict';

    angular
        .module('propertyApp')
        .factory('PropertyFactory', PropertyFactory);

    PropertyFactory.$inject = ['$http','$q', 'baseAPI'];

    /* @ngInject */
    function PropertyFactory($http, $q, baseAPI) {
        var service = {

            PostNewProperties: PostNewProperties
        };
        return service;

        ////////////////

//POSTS with PropertyController, data from property.grid.html

        function PostNewProperties(newPropertyToAPI) {
            var defer = $q.defer();

            $http({

                method:  'POST',
                 url: baseAPI + "Properties",

                 data: newPropertyToAPI

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







    }
})();