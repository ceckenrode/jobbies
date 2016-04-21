angular.module("jobbiesApp").controller('NavbarController', ['$scope', 'UserService', '$http', function($scope, UserService, $http) {
  $scope.showLogin = false;
  $scope.$watch(function() {
    return UserService.isLoggedIn();
  }, function() {
    if (UserService.isLoggedIn()) {
      $scope.showLogin = false;
    } else {
      $scope.showLogin = true;
    }
  });
  $scope.openLoginModal = function() {
    $("#loginModal").openModal({
      dismissible: false
    });
  };
  $scope.logout = function() {
    return UserService.logout();
  };
  $scope.getMailAndOpenInboxModal = function() {
    $("#inboxModal").openModal();
  };
}]);
