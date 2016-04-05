angular.module("jobbiesApp").factory('UserService', ['$http', '$localStorage', function($http, $localStorage) {
  var UserService = {
    login: function(email, password) {
      return $http.post('/login', {
        email: email,
        password: password
      }).then(function successCallback(response) {
        if (response.data._id) {
          $localStorage.user = response.data;
        }
        return response;
      }, function errorCallback(response) {
        return response;
      });
    },
    logout: function() {
      $http.get('/logout').then(function() {
      	console.log('got here');
      	console.log($localStorage.user);
        delete $localStorage.user;
      });
    },
    isAuthenticated: function() {
      if ($localStorage.user) {
        return true;
      }
      return false
    }
  };
  return UserService;
}]);
