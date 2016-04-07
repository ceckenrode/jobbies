angular.module("jobbiesApp").controller('LoginController', ['$scope', '$rootScope', '$state', 'UserService', function($scope, $rootScope, $state, UserService) {
  $scope.email = $scope.password = null;

  // if (UserService.isAuthenticated()) {
  //   $state.go('dashboard');
  // }

  $scope.login = function() {
    return UserService.login($scope.email, $scope.password).then(function(response) {
      if (response.data._id) {
        $scope.email = $scope.password = "";
        $("#loginModal").closeModal();
        Materialize.toast("Weclome, " + response.data.fName + "!", 4000, "green-text");
        $state.go('dashboard');
      } else {
        $scope.email = $scope.password = "";
        return Materialize.toast("Invalid email and/or password. Please try again.", 4000, "red-text");
      }
    })
  }
  $scope.closeModal = function() {
    $scope.email = $scope.password = null;
    $("#loginModal").closeModal();
  }
}]);
