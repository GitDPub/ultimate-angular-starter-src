function MainController($scope) {
//bind data from the controller to the view
// we use $scope object is js object with many options
//  $scope is public property to make anything attached to it
//   be available in html
//  it is necessary to inject it $httpParamSerializerJQLike
//  function MainController($scope)

  $scope.name = 'Todd';
}

angular
  .module('app')
  .controller('MainController', MainController);
