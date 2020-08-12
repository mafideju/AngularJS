(function() {

  var app = angular.module('diretives', []);
  app.directive('one', function() {
    return {
      templateUrl: 'src/views/one.html'
    };  
  });

}());
