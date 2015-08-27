

var ngModule = angular.module('app', [
    'ngMaterial',
    'ngMessages'
]);


ngModule.controller('AppCtrl', ['$scope', '$mdSidenav', '$timeout', function($scope, $mdSidenav, $timeout){

    var vm = this;

    vm.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };

    vm.inputUrl = '';
    vm.params = {};

    vm.options = {
        campaigns: [
            {
                label: 'Email',
                value: 'email'
            },
            {
                label: 'Something else',
                value: 'something'
            }
        ]
    };

    vm.serialize = function(params) {
        var str = [];
        for(var p in params)
            if (params.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(params[p].toLowerCase().replace(/ /g,'')));
            }
        return str.join("&");
    }


    vm.create = function() {
        "use strict";

        $timeout(function() {
            vm.output = vm.inputUrl + '?' + vm.serialize(vm.params);
        }, 500)

    };

}]);