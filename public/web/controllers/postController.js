angular.module("jobbiesApp").controller('PostController', ['$scope', '$http', '$localStorage', 'UserService', function($scope, $http, $localStorage, UserService) {
  console.log($localStorage.user);
  $scope.postInit = function() {
    $scope.newJobbie = {};
    $scope.newJobbie.location = {};
  };
  $scope.submitJobbie = function() {
    console.log($scope.newJobbie);
    $http.post('/api/postjobbie', $scope.newJobbie)
      .then(function successCallback(response) {
        $scope.newJobbie = {};
        $scope.newJobbie.location = {};
        Materialize.toast("Your Jobbie has been successfully posted!", 4000, "green-text");
      }, function errorCallback(response) {
        if (response.status === 401) {
          Materialize.toast(response.data.message, 4000, "red-text");
        } else {
          Materialize.toast("An error has occured", 4000, "red-text");
        }

      });
  };
}]);
