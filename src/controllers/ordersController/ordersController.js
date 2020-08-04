customersApp.controller('ordersController', ['$routeParams', 'customersService',
  function ($routeParams, customersService) {
    
    var self = this;
    var customerId = $routeParams.id;
    self.customer = null;

    function init () {
      self.customer = customersService.getCustomer(customerId);
    }
    init();

}]);
