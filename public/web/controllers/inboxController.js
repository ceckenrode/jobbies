angular.module('jobbiesApp').controller('InboxController', ['$scope', '$http', '$localStorage', function($scope, $http, $localStorage){
console.log($localStorage)
$scope.getMessages = function(){
  $http.get('api/messages')
  .then(function(response){
    console.log(response.data.messages)
    $scope.messages = response.data.messages
  });
}
$scope.getMessages();
}]);