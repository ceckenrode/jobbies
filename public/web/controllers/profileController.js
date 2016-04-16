angular.module('jobbiesApp').controller('ProfileController', ['$scope', '$http', '$state', '$stateParams', '$localStorage', 'UserService', function($scope, $http, $state, $stateParams, $localStorage, UserService) {
  //profile info (jobbie's taken & posted)
  $http({
    method: 'GET',
    url: '/api/users/' + $stateParams.userId,
  })
  .then(function successCallback(response){
    $scope.userInfo = response.data;
    $scope.jobbiesAssigned = response.data['0'].jobbiesAssigned;
    $scope.jobbiesPosted = response.data['0'].jobbiesPosted;
  }, function errorCallback(response) {
    $state.go("home");
  });
  //messaging

  $scope.isAuthed = UserService.isLoggedIn();
  $scope.openMessageModel = function() {
    $("#messageModal").openModal();
  };
  $scope.sendMessage = function(){
    $scope.message= {
      to: $stateParams.userId,
      content: $scope.content
    };
    $http.post('/sendMessage', $scope.message)
      .then(function successCallback(){
        $("#messageModal").closeModal();
        $scope.content = '';
        Materialize.toast("Message Sent!", 4000, "green-text");
      }, function errorCallback(){
        Materialize.toast("There was an error sending your message, please try again later", 4000, "red-text");
      })
  }
  console.log($stateParams);
  console.log($localStorage);
}]);
