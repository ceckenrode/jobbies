angular.module("jobbiesApp").controller('PostController', ['$scope', '$http', '$localStorage', function($scope, $http, $localStorage) {
  console.log($localStorage.user);

  $scope.postInit = function() {
    $scope.newJobbie = {};
    $scope.newJobbie.location = {};
  }
  $scope.submitJobbie = function() {
    console.log($scope.newJobbie);
    $http.post('/api/postjobbie', $scope.newJobbie)
      .then(function successCallback(response) {
        $scope.newJobbie = {};
      }, function errorCallback(response) {
        alert("SOMETHING WENT WRONG");
      });
  }
  $scope.logCat = function() {
    console.log($scope.newJobbie.category);
  }
}]);
