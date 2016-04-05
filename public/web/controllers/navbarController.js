angular.module("jobbiesApp").controller('NavbarController', ['$scope', 'UserService', function($scope, UserService) {
  $scope.showLogin = true;
  $scope.$watch(function() {
    return UserService.isAuthenticated();
  }, function() {
    if (UserService.isAuthenticated()) {
      return $scope.showLogin = false;
    } else {
      return $scope.showLogin = true;
    }
  });
  $scope.openLoginModal = function() {
    $("#loginModal").openModal({ dismissible: false });
  }
  $scope.logout = function() {
    return UserService.logout();
  }
}]);
