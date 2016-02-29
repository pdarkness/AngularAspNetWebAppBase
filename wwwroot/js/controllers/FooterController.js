angular.module('myApp').controller('FooterController', ['$scope', 'MyFactory', function ($scope, MyFactory) {
    $scope.name = MyFactory.getName();
    $scope.mapIsOn = true;
}]);