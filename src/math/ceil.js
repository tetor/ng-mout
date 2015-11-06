;(function() {
  'use strict';

  // FIXME: NOT WORK
  var math = require('mout/math');

  // TODO: make a function that returns a function
  //       angular.filter('nmCeil', wrap(math.ceil, [val]));
  function ceil(val) {
    return function(val) {
      return math.ceil(val);
    };
  }


  angular
    .module('ngMout')
    .filter('nmCeil', ceil);
});
