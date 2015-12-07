/**
 * Created by Andrey on 06.12.2015.
 */

;(function(){
    angular.module('appPhoto').controller('PhotoUpdateCtrl',photoCtrl);
    photoCtrl.$inject = ['$scope','PhotoSrv','$routeParams','$location'];
    function photoCtrl($scope,PhotoSrv,$routeParams,$location){
        $scope.image = PhotoSrv.get({id:$routeParams.id});
        $scope.update = function (id) {
            $scope.image.updated_at = new Date();
            PhotoSrv.update({id:id},{data:$scope.image}).$promise.then(function(data){
                console.log(data)
            },function(){})
        };
        $scope.delete = function (id) {
            PhotoSrv.delete({id:id}).$promise.then(function(data){
                console.log(data)
            },function(){})
        }
    }
})();