angular.module('jobbiesApp').controller('ProfileController', ['$scope', '$http', '$state', '$stateParams', function($scope, $http, $state, $stateParams) {
  console.log($stateParams)
  $http({ 
    method: 'GET',
    url: '/api/users/' + $stateParams.userId,
  })
  .then(function(response){
    $scope.userInfo = response.data;
    $scope.jobbiesAssigned = response.data['0'].jobbiesAssigned;
    $scope.jobbiesPosted = response.data['0'].jobbiesPosted;
    console.log(response.data);
  });


  // $http({
  //     method: 'GET',
  //     url: '/api/users?userId='
  //   })


 //  $http({
 //    url: user.details_path, 
 //    method: 'GET',
 //    params: {user_id: user.id}
 // });


}]);