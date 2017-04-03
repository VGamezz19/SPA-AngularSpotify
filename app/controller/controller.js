angular.module('myApp')

.controller('buscarArtistaController',function($scope,SpotyFactori) {
  $scope.submitArtist = function(event) {
    event.preventDefault();
    SpotyFactori.getArtist($scope.nameArtist).then(function (infoArtista) {
          $scope.infoArtistaSelect = infoArtista;
          $scope.nameArtist = "";

          }, function (msg) {
          alert(msg);
          console.log('ERROOR');
      });
  }



})

  .controller('selectArtistaController', function($scope, SpotyFactori){
    $scope.artistas = "Artistas";
    $scope.$on('artistaFactory', function (event, data) {
      $scope.artistasFac = data;
      $scope.albumSelect = function () {

      for (i = 0; i < $scope.artistasFac.length; i++) {

        if($scope.artistasFac[i].name == $scope.select) {

          $scope.idArtista = $scope.artistasFac[i].id;
        }
      }

        SpotyFactori.getAlbum($scope.idArtista).then(function (albumesApi) {

              $scope.albumes = albumesApi;
              console.log($scope.albumes);

              }, function (msg) {
              alert(msg);
              console.log('ERROOR');
          });
      }
    })

    $scope.singleSelect = function(id) {

      SpotyFactori.getInfoAlbum(id).then(function (infoAlbumes) {

            $scope.singleAlbum = infoAlbumes;
            console.log($scope.singleAlbum);

            }, function (msg) {
            alert(msg);
            console.log('ERROOR');
        });

      $('.modal').modal('toggle');
    }


  })

  .controller('hestoricoInput', function($scope){
    $scope.busquedas = [];

    $scope.$on('historicoFac', function (event, data) {
      console.log(data);
      $scope.busquedas.push(data);
      console.log($scope.busquedas);
    });




  })
