

var ngModule = angular.module('app', [
    'ngMaterial',
    'ngMessages'
]);


ngModule.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){

    var vm = this;

    vm.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };

    vm.url = {};

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

    vm.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function (state) { return { abbrev: state }; });

}]);