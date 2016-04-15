angular.module("jobbiesApp").controller('JobbieController', ['$scope', '$http',
  '$filter', '$state', '$stateParams',
  function($scope, $http, $filter, $state, $stateParams) {
    $scope.jobbieInit = function() {
      $http({
        method: 'GET',
        url: '/api/jobbies/' + $stateParams.jobbie_id
      }).then(function successCallback(response) {
        console.log(response.data);
        $scope.jobbie = response.data;
      }, function errorCallback(response) {
        $state.go('home');
      });

    };

    $scope.acceptJobbie = function() {
      $http({
        method: 'GET',
        url: '/api/jobbie/accept/' + $stateParams.jobbie_id
      }).then(function successCallback(response) {
        Materialize.toast("Congrats! Jobbie Accepted!", 4000, "green-text");
        $state.go('feed');
      }, function errorCallback(response) {
        Materialize.toast("Something went wrong!", 4000, "red-text");
        $state.go('home');
      });
    };
  }
]);
