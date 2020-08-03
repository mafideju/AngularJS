
customersApp.controller('customerController', ['$rootScope', '$scope', function () {
  var self = this;
  self.sortBy = 'name';
  self.reverse = false;

  self.customers=[
    {name:'Marcio',city:'São Paulo',total:'234.09',since:'2004-12-02'},
    {name:'Andre',city:'Santos',total:'7634.66',since:'2012-07-30'},
    {name:'Matt',city:'New York',total:'345.16',since:'2012-07-30'},
    {name:'Angular',city:'Los Angeles',total:'634.00',since:'2012-07-30'},
    {name:'Clemente',city:'São Paulo',total:'756.12',since:'2016-01-01'}
  ]

  self.doSort = function(filter) {
    self.sortBy = filter;
    self.reverse = !self.reverse;
  }
}]);
