angular.module("jobbiesApp").controller('MessageController', ['$scope', 'MessageService', '$http', '$state', 'UserService', function($scope, MessageService, $http, $state, UserService) {
  $scope.init = function(){
    console.log('here');
    $scope.$on('messageModal', function(event, data){
      $scope.messages = data;
    });
  };
}]);
