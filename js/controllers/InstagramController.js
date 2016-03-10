app.controller('InstagramController', function($scope, instagram){

  $scope.imgs = [];
  instagram.fetchInsta(function(data) {
      for(var i=0; i < 10; i++) {
          $scope.imgs.push(data[i]) ;
      }
  });
});
