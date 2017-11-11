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
	$scope.album = [];
	$scope.ano = "";
	$scope.musica = [];
	$scope.duracao = "";
	$scope.img = "";



	$scope.artistas = [
		["O Rappa", [["Nunca tem fim", "2016", [["Cruz de tecido",	"4:05"]]]],
		"img/rappa.jpg"],

		["Nando Reis & os infernais", [["Luau MTV", "2007",	[["Relicário", "5:07"]]]],
		"img/nando.jpg"]
	];
	$scope.informacoesCompletas = function(){
		if($scope.artista != ''&& 
			$scope.album != ''&&
			$scope.musica != ''&& 
			$scope.ano != ''&&
			$scope.duracao != ''){
			return true;
		}
		else{
			return false;
		}
	}

	$scope.addMusica = function(){
		for(var i = 0; i < $scope.artistas.length; i++){
			if($scope.artistas[i][0] == $scope.artista){
				for(var j = 0; j < $scope.artistas[i][1].length; j++){
					if($scope.artistas[i][1][j][0] == $scope.album){
						for(var k = 0; k < $scope.artistas[i][1][j][2].length; k++){
							if($scope.artistas[i][1][j][2][k][0] == $scope.musica){
								alert("Música já existente no álbum.")
								return;
							}
							else{
								$scope.artistas[i][1][j][2].push([$scope.musica, $scope.duracao]);
								return;
							}
						}
					}	
					else{
						$scope.artistas[i][1].push([$scope.album, $scope.ano, [[$scope.musica, $scope.duracao]]]);
						return;
					}
				}
			}	
			else{
				$scope.artistas.push([
					$scope.artista,[[
					$scope.album, $scope.ano, [[
					$scope.musica, $scope.duracao]]]],
					$scope.img
					])
				return;
			}	
	}
}
}]);