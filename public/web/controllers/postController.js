angular.module("jobbiesApp").controller('PostController', ['$scope', '$http', function($scope, $http){
  $scope.submitJobbie = function(){
    $http.post('/api/postjobbie', {title: $scope.jobbieTitle, description: $scope.jobbieDescription})
    .then(function successCallback(response){
      $scope.jobbieTitle = '';
      $scope.jobbieDescription = '';
    }, function errorCallback(response){
      alert("SOMETHING WENT WRONG");
    });
  }

}]);
