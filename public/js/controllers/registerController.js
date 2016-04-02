angular.module("jobbiesApp").controller('RegisterController', ['$scope', '$http', '$state', '$stateParams', function($scope, $http, $state, $stateParams) {

  $scope.validateRegistration = function() {
    if ($scope.passwordConfirm !== $scope.password){
      alert('Your passwords do not match');
      $scope.password = '';
      $scope.passwordConfirm = '';
    } else if (!$scope.password || !$scope.firstName || !$scope.lastName || !$scope.email ){
      alert('You must fill out all of the required fields');
    } else {
       $scope.register();
    }
  }
  $scope.register = function () {
        $http.post('/register', {
            fname: $scope.firstName,
            lname: $scope.lastName,
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

  $scope.login = function () {
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
