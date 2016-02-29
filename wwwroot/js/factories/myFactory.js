angular.module('myApp').factory('MyFactory', function ($http) {
    function getName() {
        return "Mary Jane";
    }

    var service = {
        getName: getName
    };

    return service;
});