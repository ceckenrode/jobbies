angular.module("jobbiesApp").controller('MessageController', ['$scope', 'MessageService', '$http', '$state', function($scope, MessageService, $http, $state) {
  $scope.init = function(){
    console.log('here');
     MessageService.getMessages().then(function(response){
      $scope.messages = response;
    });
  };
  $scope.showReplyInput = function(messageId){
    $("." + messageId).toggleClass("hide");
  }
  $scope.sendMessage = function(message, id){
    console.log(message);
    console.log(id);
    MessageService.sendMessage(message, id);
  }
}]);