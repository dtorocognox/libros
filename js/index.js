var json = $.ajax({type: "GET", url: "package.json", async: false}).responseJSON;

var index = new Array();

$.each($(json)[0], function (key) {
    index.push(key);
});

var app = angular.module('UazonApp', []);

function mcontrolador($scope){
    $scope.jSon = json;
    $scope.index = index;
}
app.controller('mcontroladorH', mcontrolador);