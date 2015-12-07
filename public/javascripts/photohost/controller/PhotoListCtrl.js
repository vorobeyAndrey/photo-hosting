/**
 * Created by Andrey on 06.12.2015.
 */

;(function(){
    angular.module('appPhoto').controller('PhotoListCtrl',photoCtrl);
    photoCtrl.$inject = ['$scope','PhotoSrv'];
    function photoCtrl($scope,PhotoSrv){
        PhotoSrv.list().$promise.then(function(data){
            $scope.list = data;
            console.log(data)
        },function(){
        })
    };
})();