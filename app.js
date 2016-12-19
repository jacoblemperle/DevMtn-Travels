angular.module('devmtnTravel', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "./views/about.html"
            })
            .state('adventurers',{
                url:'/adventurers',
                parent: 'home',
                templateUrl: "./views/about-adventurers.html"
            })
            .state('locations',{
                controller: 'locationsCtrl',
                url:'/locations',
                templateUrl: "./views/locations.html"

            })
            .state('booked',{
              controller: 'bookedCtrl',
                url:'/booked/:id',
                templateUrl: "./views/booked.html"

            })
            .state('packages',{
              controller: 'packagesCtrl',
                url:'/packages',
                templateUrl: "./views/packages.html"

            })
            .state('contact',{
                url:'/contact',
                parent: 'home',
                templateUrl: "./views/contact.html"
            });


        $urlRouterProvider
            .otherwise('/');
    });
