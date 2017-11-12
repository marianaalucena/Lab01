'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ["$scope", function($scope) {

	$scope.artistas = [];
	$scope.artista = "";
	$scope.albuns = [];
	$scope.ano = "";
	$scope.duracao = "";
	$scope.img = "";


	$scope.criaAlbum = function(musica){

		var album = new Objetc();
		album.nome = musica.album;
		album.ano = musica.ano;
		album.musicas = [];
		album.musica.push(musica);

		return album;
	}

	$scope.addMusica = function(musica){

		console.log("rola");

		var naoExiste = true;

		for(var i = 0; i < $scope.albuns.length; i++){
			for(var j = 0; j < $scope.albuns[i].musicas.length; j++){
				if($scope.albuns[i].nome === musica.album){
					var albumIgual = $scope.albuns[i];
					if ($scope.albuns[i].musicas[j].nome === musica.nome){
						alert("Musica already exist!");
						naoExiste = false;
					}
				}
			}
		}

		if(naoExiste){
			albumIgual.musicas.push(musica);
		}

		$scope.albuns.push($scope.criaAlbum(musica));

		delete $scope.musica;


	}
}]);