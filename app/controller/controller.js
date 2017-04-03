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

  .controller('selectArtistaController', function($scope){
    $scope.artistas = "Artistas";
    //console.log("selectController: ",$scope.infoArtistaSelect);
    $scope.$on('artistaFactory', function (event, data) {
      //console.log('en el otro controller', data); // 'Data to send'
      $scope.artistasFac = data;



      console.log("ArtistasControllerSelect",$scope.artistasFac);


      $scope.albumSelect = function () {
        $scope.albums = [];

        for (i = 0; i < $scope.artistasFac.length; i++) {

          if($scope.artistasFac[i].name == $scope.select) {

            $scope.albumActual = $scope.artistasFac[i].images;

            for(j = 0; j< $scope.albumActual.length; j++) {

              $scope.albums.push($scope.albumActual[j].url);
            }
            console.log($scope.albums);
          }
        }
        console.log("AlbumArtistaSelect", $scope.select);
      }
      console.log($scope.albums);
    });





  })

  .controller('hestoricoInput', function($scope){
    $scope.busquedas = [];

    $scope.$on('historicoFac', function (event, data) {
      console.log(data);
      $scope.busquedas.push(data);
      console.log($scope.busquedas);
    });




  })
