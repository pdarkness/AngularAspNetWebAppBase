var personApp = angular.module('myApp', ['ngRoute']);


function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: { lat: 44.540, lng: -74.546 },
        zoom: 8
    });
    console.log('init map ran');
}