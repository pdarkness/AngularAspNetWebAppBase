angular.module('myApp').controller('MainController', ['$scope', function ($scope) {
    $scope.products = [
        { "heading": "Cute kitty", "subHeading": "The climb", "img":"images/kitty.jpg", "p0": "First tree", "p1": "Going to be a lion when he grows!" },
        { "heading": "Announcing this years model!", "subHeading": "2016 Model is here!", "img": "images/harley.jpg", "p0": "Get your bike today", "p1": "American bikes" },
        { "heading": "Seminars", "subHeading": "Lern how to", "img": "images/DontKillTheDream.jpg", "p0": "follow your dreams", "p1": "Face life head on" }
    ];
}]);