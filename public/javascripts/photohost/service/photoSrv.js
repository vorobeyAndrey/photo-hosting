/**
 * Created by Andrey on 06.12.2015.
 */
;(function(){

    angular.module('appPhoto').factory('PhotoSrv',srv);
    srv.$inject = ['$resource'];
    function srv($resource){
        var photo = $resource('',{'id':'@id'},{
            list:{url:'/rest/photo/list',method:'GET', isArray:true},
            get:{url:'/rest/photo/:id',method:'GET'},
            upload:{url:'/rest/photo',method:'POST'},
            update:{url:'/rest/photo/:id',method:'PUT'},
            delete:{url:'/rest/photo/:id',method:'DELETE'}
        });
        return photo;
    };
})();