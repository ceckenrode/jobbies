angular.module("jobbiesApp").controller('NavbarController', ['$scope', 'UserService', '$http', 'MessageService', '$rootScope', function($scope, UserService, $http, MessageService, $rootScope) {
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
    MessageService.getMessages().then(function(response){
      $rootScope.$broadcast('messageModal', response);
    });

  };

  $scope.messages = 'testing';
}]);
