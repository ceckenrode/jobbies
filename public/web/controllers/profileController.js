angular.module('jobbiesApp').controller('ProfileController', ['$scope', '$http', '$state', '$stateParams', function($scope, $http, $state, $stateParams) {
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
}]);