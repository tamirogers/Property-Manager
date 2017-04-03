(function() {
    'use strict';

    angular
        .module('propertyApp')
        .factory('LocalFactory', LocalFactory);

    LocalFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function LocalFactory($http, $q) {
        var service = {
            func: func
        };
        return service;

        ////////////////

        function func() {
        }
    }
})();