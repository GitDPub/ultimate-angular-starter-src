function MainController() {

}
//register with angular
// getting syntax .module('app')
// second argument use setter syntax  .module('app', [])
// better use .controller('MainController', MainController); like a child module
// child js object returns methods like controller
// MainController function reference
angular
  .module('app')
  .controller('MainController', MainController);
