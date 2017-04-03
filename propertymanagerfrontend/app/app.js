(function() {
    'use strict';
    //this is where states are defined 'LocalStorageModule'   'ngFileUpload'
    angular
        .module('propertyApp', ['ui.router', 'toastr'])
        .value('baseAPI', 'http://localhost:59518/api/')
        .config(function($stateProvider, $urlRouterProvider) {
            // filepickerProvider.setKey('AWYsdi7fdToq5BXZqyGeOz');
            $urlRouterProvider.otherwise("/search");



            $stateProvider
            //state params ('search') are used to pass data inbetween controllers
                .state('search', {
                url: "/search",
                templateUrl: "app/search/search.html",
                controller: 'SearchController',
                controllerAs: 'vm'


            })

            //state params ('search') are used to pass data inbetween controllers
            .state('register', {
                //url extends on to main url  
                url: "/register",
                templateUrl: "app/user/register.html",
                controller: 'UserController',
                // controller: ['UserController', 'NavbarController'],
                controllerAs: 'vm'
            })



            .state('searchgrid', {
                
                url: '/searchgrid', 
                templateUrl: 'app/search/search.grid.html',
                controller: 'SearchController',
                controllerAs: 'vm',
             

            })


            .state('propertydetail', {
                // I wrote in detailing
                url: '/propertydetail', //state param and property name that I'm sending throw router
                templateUrl: 'app/property/property.detail.html',
                controller: 'PropertyDetailController',
                controllerAs: 'pc',
                   params: {
                    searchCityString: '',
                    searchZipString: '',
                    searchMinRentString: '',
                    searchMaxRentString: ''
                }

            })

              .state('propertygrid', {
                
                url: '/propertygrid', 
                templateUrl: 'app/property/property.grid.html',
                controller: 'PropertyController',
                controllerAs: 'vm'

        })
})
})();