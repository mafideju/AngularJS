customersApp.controller('ordersController', ['$rootScope', '$scope', '$routeParams',
  function ($rootScope, $scope, $routeParams) {
    
    var self = this;
    var customerId = $routeParams.id;
    $scope.orders = null;
    $scope.teste = 'teste';

    function init() {
      for (var i = 0; i < $scope.customers.length; i++) {
        if ($scope.customers[i].id === parseInt(customerId)) {
          $scope.orders = $scope.customers[i].orders;
          break;
        }
      }
    }

    $scope.customers=[
      {
        id: 1,
        name:'Marcio',
        city:'São Paulo',
        total: 9.34,
        since:'2004-12-02',
        orders: [
          { id: 1, product: 'Tenis', total: 9.34 }
        ]
      },
      {
        id: 2,
        name:'Andre',
        city:'Santos',
        total:'7634.66',
        since:'2012-07-30',
        orders: [
          { id: 2, product: 'Agasalho', total: 56.67 },
          { id: 3, product: 'Tenis', total: 9.34 }
        ]
      },
      {
        id: 3,
        name:'Matt',
        city:'New York',
        total:'345.16',
        since:'2012-07-30',
        orders: [
          { id: 4, product: 'Bola de Futebol', total: 23.65 }
        ]
      },
      {
        id: 4,
        name:'Angular',
        city:'Los Angeles',
        total:'634.00',
        since:'2012-07-30',
        orders: [
          { id: 5, product: 'Agasalho', total: 56.67 },
          { id: 6, product: 'Tenis', total: 9.34 },
          { id: 7, product: 'Bola de Futebol', total: 23.65 }
        ]
      },
      {
        id: 5,
        name:'Clemente',
        city:'São Paulo',
        total:'756.12',
        since:'2016-01-01',
        orders: [
          { id: 8, product: 'Bola de Futebol', total: 23.65 }
        ]
      }
    ];
    init();


}]);