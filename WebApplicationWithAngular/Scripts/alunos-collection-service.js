angular.module('aplicacao').service('AlunosCollectionService', function ($filter) {

    var ordenadoPorNome = false;
    var ordenadoPorIdade = false;
    var alunos = [{ 'nome': 'Joãozinho', 'idade': 9 },
                  { 'nome': 'Ricardinho', 'idade': 11 },
                  { 'nome': 'Felipinho', 'idade': 11 },
                  { 'nome': 'Zildinha', 'idade': 14 },
                  { 'nome': 'Marianinha', 'idade': 10 },
                  { 'nome': 'Luluzinha', 'idade': 12 }];

    this.getAluno = function () {
        return alunos;
    }
    this.adicionarAluno = function (aluno) {
        alunos.push(aluno);
    }

    this.ordernarPorNome = function () {
        ordernarPorNome = !ordernarPorNome;
        alunos = $filter('orderBy')(alunos, 'nome', ordernarPorNome);
    }

    this.ordernarPorIdade = function () {
        ordernarPorIdade = !ordernarPorIdade;
        alunos = $filter('orderBy')(alunos, 'idade', ordenadoPorIdade);
    }


});