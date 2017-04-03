angular.module("myApp")
  .factory("SpotyFactori", function($http, $rootScope) {



    function getArtist(artist){

      var url = 'https://api.spotify.com/v1/search?q=<%ARTIST%>&type=artist'
      url = url.replace('<%ARTIST%>',artist)

      return $http.get(url)
                .then( getResults )
                .then(function(artistas) {
                  $rootScope.$broadcast('artistaFactory', artistas, artist)
                })
                .then(function() {
                  $rootScope.$broadcast('historicoFac', artist)
                })



    }

    function getAlbum(idArtista){

      var url = 'https://api.spotify.com/v1/artists/<%ARTIST-ID%>/albums'
      url = url.replace('<%ARTIST-ID%>',idArtista)

      return $http.get(url)
                .then( getResultsAlbum )
                /*.then(function(albumes) {
                  $rootScope.$broadcast('albumFactory', albumes)
                })
              /*  .then(function() {
                  $rootScope.$broadcast('historicoFac', artist)
                }) */



    }

    return {
      getArtist: getArtist,
      getAlbum: getAlbum,
    }
  })

//Gets

  function getResultsAlbum(response){
    console.log(response.data);
    return response.data.items;
  }

  function getResults(response) {
    console.log(response.data);
    //Le pasamos el objeto parseado.
    return response.data.artists.items;
  }
