function MainController(a, b) {
  a.name = 'Todd';
}

angular
  .module('app')
  .controller('MainController', [
    '$scope', //a
    '$rootScope', //b
    MainController
  ]);


// other syntax:
// function MainController(a, b) {
//     a.name = 'Todd';
// }
// MainController.$inject = ['$scope', '$rootScope'];
// angular
//     .module('app')
//     .controller('MainController', MainController);
