angular.module("jobbiesApp").controller('JobbieController', ['$scope', '$http', '$state', '$stateParams', 'UserService', 'MessageService',
  function($scope, $http, $state, $stateParams, UserService, MessageService) {
    $scope.jobbieInit = function() {
      $scope.user = UserService.getUser();
      console.log($scope.user);
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

    $scope.acceptJobbie = function(id) {
      $http({
        method: 'GET',
        url: '/api/jobbie/accept/' + $stateParams.jobbie_id
      }).then(function successCallback(response) {
        Materialize.toast("Congrats! Jobbie Accepted!", 4000, "green-text");
        MessageService.sendMessage("I've taken your jobbie!",id);
        $state.go('feed');
      }, function errorCallback(response) {
        Materialize.toast("Something went wrong!", 4000, "red-text");
        $state.go('home');
      });
    };
  }
]);
