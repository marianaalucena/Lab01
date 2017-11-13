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

		var album = new Object();
		album.nome = musica.album;
		album.ano = musica.ano;
		album.musicas = [];
		album.musicas.push(musica);

		return album;
	}

	/*$scope.addMusica = function(musica){

		console.log("oi");

		var naoExiste = true;

		for(var i = 0; i < $scope.albuns.length; i++){
			if($scope.albuns[i].nome === musica.album){
				var albumIgual = $scope.albuns[i];
				for(var j = 0; j < $scope.albuns[i].musicas.length; j++){					
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

	}*/

	$scope.addMusica = function(musica){

      var naoAdicionado = true;

      if($scope.albuns.length < 1){

        $scope.albuns.push($scope.criaAlbum(musica));
        alert("Música adicionada com sucesso");

      }else{
        for (var i = 0; i < $scope.albuns.length; i++) {
          if($scope.verificaAlbumIgual($scope.albuns[i], musica)){
            if($scope.verificaMusicaIgual($scope.albuns[i], musica) && naoAdicionado){
              alert("Não pode existir duas músicas com o mesmo nome no mesmo álbum");
              naoAdicionado = false;
            }else{
              if(naoAdicionado){
                $scope.albuns[i].musicas.push(musica);
                alert("Música adicionada com sucesso");
                naoAdicionado = false;
              }
            }

          }else{
            if(naoAdicionado){
              $scope.albuns.push($scope.criaAlbum(musica));
              alert("Música adicionada com sucesso");
              naoAdicionado = false;
            }
          }
        }
      }

      delete $scope.musica;
    };


	 $scope.criaAlbum = function(musica){

      var album = new Object();
      album.nome = musica.album;
      album.artista = musica.artista;
      album.musicas = [];
      $scope.adicionaAlbumAoArtista(album);
      album.musicas.push(musica);

      return album;

    };

    $scope.verificaAlbumIgual = function(album, musica){

      if(album.nome === musica.album){
        return true;
      }

      return false;

    };

    $scope.verificaMusicaIgual = function(album, musica){

      for (var i = 0; i < album.musicas.length; i++) {
        if(album.musicas[i].nome === musica.nome){
          return true;
        }
      }



      return false;
    };
	$scope.adicionaAlbumAoArtista = function(album){
		var naoAdicionado = true;
		for (var i = 0; i < $scope.artistas.length; i++) {
	    	if($scope.artistas[i].nome === album.artista && naoAdicionado){
	      		$scope.artistas[i].albuns.push(album);
	      		naoAdicionado = false;
	    	}
      	}
    };
}]);