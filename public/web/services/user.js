angular.module("jobbiesApp").factory('UserService', ['$http', '$localStorage', '$state', function($http, $localStorage, $state) {
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
        delete $localStorage.user;
      });
    },
    isAuthenticated: function() {
      $http.get('/authenticate').then(function successCallback(response) {
        if (!$localStorage.user && response.status === 200) {
          $localStorage.user = response.data;
        }

      }, function errorCallback(response) {
        if ($localStorage.user && response.status !== 200) {
          delete $localStorage.user;
          $state.go('home');
        }
      });
      return this.isLoggedIn();
    },
    isLoggedIn: function() {
      if ($localStorage.user) {
        return true;
      } else {
        return false;
      }
    }
  };
  return UserService;
}]);
