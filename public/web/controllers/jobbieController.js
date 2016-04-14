angular.module("jobbiesApp").controller('JobbieController', ['$scope', '$http',
  '$filter', '$state', '$stateParams',
  function($scope, $http, $filter, $state, $stateParams) {
    $scope.jobbieInit = function() {
      $http({
        method: 'GET',
        url: '/api/jobbies/?id=' + $stateParams.jobbie_id
      }).then(function successCallback(response) {
        console.log($stateParams.jobbie_id);
        console.log(response.data);
      }, function errorCallback(response) {
        console.log($stateParams.jobbie_id);
        console.log("response.data");
      });

    };

  }
]);
