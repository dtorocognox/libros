var json = $.ajax({type: "GET", url: "package.json", async: false}).responseJSON;

var index = new Array();

$.each($(json)[0], function (key) {
    index.push(key);
});
index.pop();

var app = angular.module('UazonApp', []);

function mcontrolador($scope){
    $scope.jSon = json;
    $scope.index = index;
}
app.controller('mcontroladorH', mcontrolador);

var app2 = angular.module('UazonApp2',["ngRoute"]);

app2.config(function($routeProvider){
    $routeProvider
        .when("/listadoIndex",{
            templateUrl: "listadoIndex.html"
        })
        .when("/listado",{
        templateUrl: "listado.html"
    })
        .when("/fichaHTML", {
            templateUrl: "ficha.html"
        });
});