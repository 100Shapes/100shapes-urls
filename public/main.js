
var ngModule = angular.module('app', [
    'ngMaterial',
    'ngMessages',
    'firebase'
]);


ngModule.controller('AppCtrl', ['$scope', '$mdSidenav', '$timeout', function($scope, $mdSidenav, $timeout, $firebaseObject){

    // var ref = new Firebase("https://ohs-url-shortener.firebaseio.com");
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

    vm.reset = function() {
        "use strict";

        vm.params = {};
        vm.inputUrl = '';
    }

    vm.create = function() {
        "use strict";

        $timeout(function() {
            vm.output = 'http://100s.co/e7sd0d8?' + vm.serialize(vm.params);
        }, 500)

    };

}]);
