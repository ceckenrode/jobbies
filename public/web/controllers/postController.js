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
      }, function errorCallback(response) {
        if (response.data.loggedIn === false) {
          alert("You must log in to post a Jobbie.");
          return UserService.logout();
        }
      });
  };
}]);
