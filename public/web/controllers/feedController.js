angular.module("jobbiesApp").controller('FeedController', ['$scope', '$http', 'NgTableParams', '$filter',
  function($scope, $http, NgTableParams, $filter) {
    $scope.feedInit = function() {
      $scope.jobbiesTable = new NgTableParams({
        sorting: {
          day: 'asc'
        }
      }, {
        counts: [],
        getData: function($defer, params) {
          return $http.get('/api/jobbies').then(function(response) {
            $scope.totalJobbies = response.data.length;
            console.log(response.data);
            return $filter('orderBy')(response.data, params.orderBy());
          });
        }
      });
    };
  }
]);
