angular.module("jobbiesApp").controller('LoginController', ['$scope', '$http', '$state', '$stateParams', function($scope, $http, $state, $stateParams) {
  $scope.login = function() {
    $http({
      method: 'POST',
      url: '/login',
      data: { email: $scope.email, password: $scope.password }
    }).then(function successCallback(response) {
      $scope.email = '';
      $scope.password = '';
      Materialize.toast("Weclome, " + response.data.fName + "!", 4000, "green-text");
      console.log(response.data);
      $("#loginModal").closeModal();
      $state.go('dashboard');
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      $scope.email = '';
      $scope.password = '';
      Materialize.toast("Invalid email and/or password. Please try again.", 4000, "red-text");
    });
  }
}]);
