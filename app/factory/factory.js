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

    return {
      getArtist: getArtist,
    }
  })
  function getResults(response) {
    console.log(response.data);
    //Le pasamos el objeto parseado.
    return response.data.artists.items;
  }
