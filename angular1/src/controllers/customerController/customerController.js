
customersApp.controller('customerController', ['$scope', 'customersService', 
  function ($scope, customersService) {
    var self = this;
    self.sortBy = 'name';
    self.reverse = false;
    self.customers = [];

    customersService.getCustomers()
      .then(function(customers){
        // DATA IS HERE BUT NEVER RETURNS TO THE VIEW
        self.customers = customers;

        console.log('customers 1:', self.customers);
      })
      .catch(function(error){
        console.log('error :', error);
      })
      
    setTimeout(() => {
      console.log('customers 2:', self.customers);
    }, 50);
    
    self.doSort = function(filter) {
      self.sortBy = filter;
      self.reverse = !self.reverse;
  }
  // return customersService;
}]);
