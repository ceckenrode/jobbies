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
    $("#loginModal").openModal({ dismissible: false });
  };
  $scope.logout = function() {
    return UserService.logout();
  };
  $scope.getMailAndOpenInboxModal = function(){
    $http.get('api/messages')
    .then(function(response){
      // console.log(response.data.messages)
      $scope.messages = response.data.messages;
      console.log($scope.messages);
      $("#inboxModal").openModal();
    });
    console.log($scope.messages)
  };
  console.log($scope.messages)
}]);
