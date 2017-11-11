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

	$scope.addArtista = function() {
		if($scope.artista != '') {
			for(var i=0; i<$scope.artistas.length; i++){
				if($scope.artistas[i] == $scope.artista){
					alert("Artista já existente.");
					return;
				}
			}
			$scope.artistas.push($scope.artista);
			console.log($scope.artistas);
			alert("Artista adicionado como sucesso.");
		}
		else{
			alert("Artista inválido.");
		}
	}

	$scope.buscarArtista = function() {
		if($scope.artista != '') {
			for(var i = 0; i < $scope.artistas.length; i++){
				if($scope.artistas[i] == $scope.artista){
					return $scope.artistas[i];
				}
			}
		}		
	}

	$scope.addFavoritos = function() {
		$scope.favoritos.push(buscarArtista());
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
	}	


}]);