angular.module("jobbiesApp").controller('PostController', ['$scope', '$http', '$localStorage', function($scope, $http, $localStorage){
  console.log($localStorage.user);
  $scope.submitJobbie = function(){
    $http.post('/api/postjobbie', {title: $scope.jobbieTitle, compensation: $scope.jobbieCompensation, estCompletionTime: $scope.jobbieEstCompletionTime, location: [{address1: $scope.jobbieAddress1, address2: $scope.jobbieAddress2, city: $scope.jobbieCity, state: $scope.jobbieState, zip: $scope.jobbieZip}], employer: ["ObjectId('" + $localStorage.user._id + "')"], description: $scope.jobbieDescription})
    .then(function successCallback(response){
      $scope.jobbieTitle = '';
      $scope.jobbieDescription = '';
      $scope.jobbieCompensation = '';
      $scope.jobbieEstCompletionTime = '';
      $scope.jobbieAddress1 = '';
      $scope.jobbieAddress2 = '';
      $scope.jobbieCity = '';
      $scope.jobbieState = '';
      $scope.jobbieZip = '';
    }, function errorCallback(response){
      alert("SOMETHING WENT WRONG");
    });
  }

}]);
