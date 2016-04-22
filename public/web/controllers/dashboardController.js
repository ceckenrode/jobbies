angular.module("jobbiesApp").controller('DashboardController', ['$scope', '$http', '$state', '$stateParams', 'UserService', function($scope, $http, $state, $stateParams, UserService) {
  $scope.init = function() {
    $scope.user = UserService.getUser();
    $http.get('/api/jobbies/?userId=' + $scope.user._id).then(function successCallback(response) {
      $scope.takenJobbies = response.data;
    }, function errorCallback() {
      materialize.toast("Error, something went wrong", "red-text", 4000);
    });
    $http.get('/api/jobbies/?employeeId=' + $scope.user._id).then(function successCallback(response) {
      $scope.postedJobbies = response.data;
    }, function errorCallback() {
      materialize.toast("Error, something went wrong", "red-text", 4000);
    });
  };
}]);
