var app = angular.module("app", ['ngRouter'])
    .config(function ($routerProvider, $locationProvider) {
        $routerProvider.when('/Home/Index', { templateUrl: '/inicial.html', controller: 'PrimeiroController' });
    });
//var app = angular.module('aplicacao', ['ngResource', 'ui.router'])
//    .config(function ($stateProvider) {
//        $stateProvider
//        .state('aplicacao_inicial', {
//            name: 'aplicacao_inicial',
//            url: '/inicial.html',
//            templateUrl: '/inicial.html'
//        }).state('aplicacao_listagem', {
//            name: 'aplicacao_listagem',
//            url: '/listagem.html',
//            templateUrl: '~/Views/listagem-alunos.html'
//        }).state('aplicacao_cadastro', {
//            name: 'aplicacao_cadastro',
//            url: '/cadastro.html',
//            templateUrl: '~/Views/casdatro-aluno.html'
//        }).state('aplicacao_previsoa', {
//            name: 'aplicacao_previsoa',
//            url: '/precisao.html',
//            templateUrl: '~/Views/previsao-do-tempo.html'
//        });

//    });


//app.run(function ($rootScope, $state) {
//    $state.go("aplicacao_inicial");
//});