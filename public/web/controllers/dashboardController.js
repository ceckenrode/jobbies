angular.module("jobbiesApp").controller('DashboardController', ['$scope', '$http', '$state', '$stateParams', '$localStorage', function($scope, $http, $state, $stateParams, $localStorage){
 $scope.user = $localStorage.user;
 $scope.newJobbie = {
   title: "",
   description: ""
 }

$http.get('/api/jobbies').then(function successCallback(response){
  $scope.jobbies = response.data;
}, function errorCallback(response){
})


 $scope.postJobbie = function() {
   $http.post("api/postjobbie", $scope.newJobbie)
   .then(function successCallback(response) {
       //First function handles success
       $scope.message = "Success!";
   }, function errorCallback(response) {
       //Second function handles error
       $scope.message = "Something went wrong";
   });
 }
}]);
