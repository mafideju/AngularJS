(function() {
  var customersService = function($http) {
    var self = this;

    self.getCustomers = function() {
      return fetch('../../customers.json').then(response => response.json());
    };
    self.getCustomer = function(customerId) {
      return fetch(`/customers/${customerId}`).then(response => response.json())
    };

  };

  customersService.$inject = ['$http'];
  angular.module('customersApp').service('customersService', customersService);
  
}());