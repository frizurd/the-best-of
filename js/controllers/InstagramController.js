app.controller('InstagramController', function($scope, instagram){

  var search = 'baklava';
  $scope.imgs = [];
  instagram.fetchInsta(function(data) {
      for(var i=0; i < 1; i++) {
          $scope.imgs.push(data[i]) ;
      }
  });
});
