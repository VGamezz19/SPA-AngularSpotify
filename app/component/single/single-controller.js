

angular.module('single').controller('singleController',['$scope','$routeParams', function($scope,$routeParams) {

   $scope.movieId = $routeParams.albumId;
   console.log($scope.movieId);

   $scope.singleAlbum =   $scope.albumes[$scope.movieId];

   console.log($scope.singleAlbum);

    }]);
