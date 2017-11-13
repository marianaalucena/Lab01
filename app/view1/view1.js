'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ["$scope", function($scope) {

	$scope.artistas = [];
	$scope.artista = "";
	$scope.favoritos= [];
	$scope.menuFavoritos = false;
	$scope.buscados = [];
	$scope.artistaSelecionado = "";
	$scope.mostraArtista = false;
	$scope.mostraBusca = false;

	$scope.addArtista = function(artista) {
		
		var naoIguais = true;

		for(var i=0; i<$scope.artistas.length; i++){
			if($scope.artistas[i].nome == artista.nome){
				alert("Artista já existente.");
				naoIguais = false;
			}
		}

		if(naoIguais){
			artista.ultimaMusica = "Ainda não escutado!"
			artista.nota = "-";
			$scope.artistas.push(artista);
			alert("Artista adicionado com sucesso.");
		}

		delete $scope.artista;
		
	}

	$scope.mostraArtista1 = function(artista){

		$scope.mostraArtista = true;
		$scope.mostraBusca = false;
		$scope.artistaSelecionado = artista;

	}

	$scope.mostraBusca1 = function(){
		$scope.mostraBusca = true;
		$scope.mostraArtista = false;
	}

	$scope.buscarArtista = function(artistaBuscado) {

		$scope.buscados = [];

		for(var i = 0; i < $scope.artistas.length; i++){
			if($scope.artistas[i].nome.indexOf(artistaBuscado) !== -1){
				$scope.buscados.push($scope.artistas[i]);
			}
		}

		$scope.mostraBusca1();

		delete $scope.pesquisa;
			
	}

	$scope.addNota = function(nota){
		$scope.artistaSelecionado.nota = nota;
	}

	$scope.atribuiUltimaMusica = function(ultimaMusica){
		$scope.artistaSelecionado.ultimaMusica = ultimaMusica;
	}

      
      $scope.addFavoritos = function(artista1){

	      var adicionado = true;

	      for (var i = 0; i < $scope.favoritos.length; i++) {
	        if ($scope.favoritos[i].nome === artista1.nome && adicionado) {
	          alert("Artista já foi adicionado a lista de favoritos!");
	          adicionado = false;

	        }
	      }

	      if(adicionado){
	        $scope.favoritos.push(angular.copy(artista1));
	        alert("Artista adicionado com sucesso!");
	      }
	    }

    $scope.excluirFavorito = function(artista){

      var naoExcluido = true;

      for (var i = $scope.favoritos.length -1; i >= 0; i--) {
        if($scope.favoritos[i].nome === artista.nome && naoExcluido){
          $scope.favoritos.splice(i,1);
          naoExcluido = false;
        }
      }
    }


	/*$scope.addFavoritos = function(nome, img, musica, nota) {
		$scope.favoritos.push(nome, img, musica, nota);
	}

	$scope.haFavoritos = function(){
		if($scope.favoritos.length > 0){
			return true;
		}
		return false;
	}

	$scope.removeFavoritos = function(){
		for(var i = 0; i < $scope.favoritos.length; i++){
			if($scope.favoritos[i] == $scope.artista){
				delete $scope.favoritos[i];
			}
		}
	}	*/


}]);