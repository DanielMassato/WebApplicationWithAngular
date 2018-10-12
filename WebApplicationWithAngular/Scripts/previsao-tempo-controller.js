angular.module('aplicacao').controller('PrevisaoTempoController', function ($scope, $resource) {
    var WeatherChannel = $resource('http://localhost:50794/Home/Teste');

    var getWeather = function () {
        WeatherChannel.get().$promise.then(function (response) {
            $scope.tempo = response;
            console.log(response);
        }, function (promise) {
            alert("Erro ao requisitar Recurso!");
            })
    }

    getWeather();
});