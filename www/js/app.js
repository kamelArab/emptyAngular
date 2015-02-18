/**
 * Created by karab on 18/02/15.
 */

    angular.module('empty.app.controller',[]);
    angular.module('empty.app',['ngRoute','ngMaterial','empty.app.controller'])


    .config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            });

        // configure html5 to get links working on jsfiddle
        //$locationProvider.html5Mode(true);
    }]);
//angular.bootstrap(document.body,"empty.app");
