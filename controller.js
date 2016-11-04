var app = angular.module("myFirstApp", []);

app.controller("FirstController", function($scope){
    $scope.nombre = "Uriel";
    $scope.funcion = function (){
        return 2;
    };
});