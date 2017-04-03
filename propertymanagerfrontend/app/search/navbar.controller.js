(function() {
    'use strict';

    angular
        .module('propertyApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$state'];

    /* @ngInject */
    function NavbarController($state) {
        var vm = this;
        vm.title = 'NavbarController';
        vm.links = [
        'Home', 'Property Search', 'Register'
        ]

        // activate();

        ////////////////

        // function activate() {
        // }
    }
})();