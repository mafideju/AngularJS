// import customerController from 'customerController/customerController.js';

var customersApp = angular.module('customersApp', ['ngRoute']);

customersApp.config(function($routeProvider) {

  $routeProvider
    .when('/', {
      controller: 'customerController',
      controllerAs: 'cc',
      templateUrl: 'src/views/customers.html'
    })
    .when('/orders/:id', {
      controller: 'ordersController',
      templateUrl: 'src/views/orders.html'
    })
    .otherwise({ redirectTo: '/' });
});

// customersApp.controller('customerController', ['$rootScope', '$scope', customerController]);
