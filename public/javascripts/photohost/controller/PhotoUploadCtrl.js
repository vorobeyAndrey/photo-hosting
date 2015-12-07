/**
 * Created by Andrey on 06.12.2015.
 */

;(function(){
    angular.module('appPhoto').controller('PhotoUploadCtrl',photoCtrl);
    photoCtrl.$inject = ['$scope','FileUploader','PhotoSrv'];
    function photoCtrl($scope,FileUploader,PhotoSrv){
        $scope.uploader = new FileUploader({url:'/rest/photo'});
        $scope.submitPost = function () {
            PhotoSrv.upload($scope.form).$promise.then
                (function(data) {});
        };
    }
})();