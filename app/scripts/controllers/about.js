'use strict';

/**
 * @ngdoc function
 * @name webpageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webpageApp
 */
angular.module('webpageApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
