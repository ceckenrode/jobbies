angular.module("jobbiesApp").controller('RegisterController', ['$scope', '$http', '$state', '$stateParams', function($scope, $http, $state, $stateParams) {

  $scope.validateRegistration = function() {
    if ($scope.passwordConfirm !== $scope.password) {
      Materialize.toast("Your passwords do not match.", 4000, "red-text");
      $scope.password = '';
      $scope.passwordConfirm = '';
    } else if (!$scope.password || !$scope.firstName || !$scope.lastName) {
      Materialize.toast("You must fill out all of the required fields.", 4000, "red-text");
    } else if ($scope.password.length < 8) {
      Materialize.toast("Your password must be at least 8 chracters long.", 4000, "red-text");
    } else if (!$scope.email || $scope.email.indexOf("@") === -1 || $scope.email.indexOf(".") === -1 || $scope.email.indexOf(".") < $scope.email.indexOf("@") || $scope.email.indexOf("@") < 1 || $scope.email.indexOf(".", $scope.email.indexOf("@")) === -1) {
      Materialize.toast("Please enter a valid email address.", 4000, "red-text");
    } else {
      $scope.register();
    }
  }
  $scope.register = function() {
    $http.post('/register', {
        fName: $scope.firstName,
        lName: $scope.lastName,
        email: $scope.email,
        password: $scope.password
      })
      .then(function successCallback(response) {
        console.log("success");
        console.log(response.data);
        $scope.email = '';
        $scope.password = '';
        $scope.firstName = '';
        $scope.lastName = '';
        $scope.passwordConfirm = '';
        $state.go('dashboard');
      }, function errorCallback(response) {
        console.log('failed');
        $scope.email = '';
        $scope.password = '';
      });
  }

  $scope.login = function() {
    $http.post('/login', {
        email: $scope.email,
        password: $scope.password
      })
      .then(function successCallback(response) {
        console.log("success");
        console.log(response.data);
        $scope.email = '';
        $scope.password = '';
        $scope.username = response.data.username;
      }, function errorCallback(response) {
        console.log('failed');
        $scope.email = '';
        $scope.password = '';
      });
  }

}]);
