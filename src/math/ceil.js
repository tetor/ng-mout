;(function() {
  'use strict';

  var math = require('mout/math');

  // TODO: make function returns function
  // angular.filter('nmCeil', wrap(math.ceil, [val]));
  function ceil(val) {
    return function() {
      return math.ceil(val);
    };
  }

  angular
    .module('ngMout')
    .filter('nmCeil', ceil);
});
