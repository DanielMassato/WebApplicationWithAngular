angular.module('aplicacao').controller('PrimeiroController', function ($scope, $filter, AlunosCollectionService) {
    $scope.nome = 'Daniel Shiroma'

    $scope.hoje = new Date();
    $scope.iniciado = true;
    $scope.alunos = AlunosCollectionService.getAluno();

    $scope.hoje = new Date();

    $scope.finalizar = function () { $scope.iniciado = false; };
    $scope.iniciar = function () { $scope.iniciado = true; };


    $scope.ordernarPorNome = function () {
        AlunosCollectionService.ordernarPorNome();
        $scope.alunos = AlunosCollectionService.getAluno();
    }

    $scope.ordernarPorIdade = function () {
        AlunosCollectionService.ordernarPorIdade();  
        $scope.alunos = AlunosCollectionService.getAluno();
    }

  
});