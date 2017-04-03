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
    }

    function getInfoAlbum(idAlbum){

      var url = 'https://api.spotify.com/v1/albums/<%ALBUM-ID%>'
      url = url.replace('<%ALBUM-ID%>',idAlbum)

      return $http.get(url)
                .then( getResultInfoAlbum )

    }

    return {
      getArtist: getArtist,
      getAlbum: getAlbum,
      getInfoAlbum : getInfoAlbum,
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

  function getResultInfoAlbum(response) {
    console.log(response.data);
    return response.data;
  }
