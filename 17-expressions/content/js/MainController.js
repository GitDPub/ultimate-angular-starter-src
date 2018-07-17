function MainController() {
  this.myArray = ['my', 'angular', 'app'];

    this.myObject = {
        one: 'Key 1',
        two: 'Key 2'
    };

}

angular
  .module('app')
  .controller('MainController', MainController);
