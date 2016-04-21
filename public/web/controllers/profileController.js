angular.module('jobbiesApp').controller('ProfileController', ['$scope', '$http', '$state', '$stateParams', '$localStorage', 'UserService','MessageService', function($scope, $http, $state, $stateParams, $localStorage, UserService, MessageService) {
  //profile info (jobbie's taken & posted)
  $http({
    method: 'GET',
    url: '/api/users/' + $stateParams.userId,
  })
  .then(function successCallback(response){
    $scope.userInfo = response.data;
    $scope.jobbiesAssigned = response.data['0'].jobbiesAssigned;
    $scope.jobbiesPosted = response.data['0'].jobbiesPosted;
    $scope.userReviews = response.data.ratings;
  }, function errorCallback(response) {
    $state.go("home");
  });

  $scope.isAuthed = UserService.isLoggedIn();
  $scope.openMessageModel = function() {
    $("#messageModal").openModal();
  };
  $scope.sendMessage = function(){
    MessageService.sendMessage($scope.content, $stateParams.userId).then(function successCallback(response) {
      $("#messageModal").closeModal();
      Materialize.toast("Message Sent!", 4000, "green-text");
      $scope.content = "";
    }, function errorCallback() {
      Materialize.toast("There was an error sending your message, please try again later", 4000, "red-text");
      $scope.content = "";
    });
  };
}]);
