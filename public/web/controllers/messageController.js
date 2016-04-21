angular.module("jobbiesApp").controller('MessageController', ['$scope', 'MessageService', '$http', '$state', function($scope, MessageService, $http, $state) {
  $scope.init = function(){
    console.log('here');
     MessageService.getMessages().then(function(response){
      $scope.messages = response;
    });
  };
}]);
