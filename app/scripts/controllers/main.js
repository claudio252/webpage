'use strict';

/**
 * @ngdoc function
 * @name webpageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webpageApp
 */
angular.module('webpageApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
