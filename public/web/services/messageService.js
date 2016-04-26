angular.module("jobbiesApp").factory('MessageService', ['$http', '$localStorage', '$state', function($http, $localStorage, $state) {
  var MessageService = {
    sendMessage: function(message, id) {
      return $http.post('/sendMessage', {
        to: id,
        content: message
      }).then(function successCallback(response) {
        return response;
      }, function errorCallback() {
      });
    },
    getMessages: function() {
      return $http.get('/api/messages').then(function successCallback(response) {
        // console.log("USer service", response.data);
        return response.data;
      }, function errorCallback() {
        delete $localStorage.user;
        $state.go('home');
        return false;
      });
    },
  };
  return MessageService;
}]);
