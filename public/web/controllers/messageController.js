angular.module("jobbiesApp").controller('MessageController', ['$scope', 'MessageService', '$http', function($scope, MessageService, $http) {
  $scope.init = function(){
    console.log('here');
     MessageService.getMessages().then(function(response){
      $scope.messages = response;
    });
  };
}]);
