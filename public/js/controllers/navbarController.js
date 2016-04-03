angular.module("jobbiesApp").controller('NavbarController', ['$scope', function($scope){
  $scope.openLoginModal = function() {
  	$("#loginModal").openModal({dismissible: false});
  }
}]);