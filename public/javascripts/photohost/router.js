/**
 * Created by Andrey on 06.12.2015.
 */
;(function(){
    angular
        .module('appPhoto')
        .config(cfg);

    cfg.$inject = [
        '$routeProvider'
    ];

    function cfg($routeProvider) {

        ////////// Configuration ///////////

        $routeProvider.
            when('/', {
                templateUrl: 'view/photoList.html',
                controller: 'PhotoListCtrl'
            }).
            when('/photo/:id', {
                templateUrl: 'view/photo.html',
                controller: 'PhotoUpdateCtrl'
            }).
            when('/photo', {
                templateUrl: 'view/uploadPhoto.html',
                controller: 'PhotoUploadCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }

})()