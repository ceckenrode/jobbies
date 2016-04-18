angular.module("jobbiesApp").controller('FeedController', ['$scope', '$http',
  'NgTableParams', '$filter','$state', '$stateParams',
  function($scope, $http, NgTableParams, $filter, $state, $stateParams) {
    $scope.feedInit = function() {
      $scope.category = {handywork:true, housework:true, yardwork: true, misc: true};
      $scope.query="";
      $scope.jobbiesTable = new NgTableParams({
        sorting: {
          day: 'asc'
        }
      }, {
        counts: [],
        getData: function($defer, params) {
          return $http.get('/api/jobbies/'+$scope.updateQuery()).then(function(response) {
            $scope.totalJobbies = response.data.length;
            console.log(response.data);
            return $filter('orderBy')(response.data, params.orderBy());
          });
        }
      });
    };

    $scope.updateQuery = function(){
      $scope.queryString= "?";
      _.forOwn($scope.category, function(value,key){
        console.log(value,key);
        if (value === true){
          if($scope.queryString.length!==1){
            $scope.queryString+="&";
          }
          $scope.queryString+= key + "=true";
        }
      });
      console.log($scope.queryString);
      return $scope.queryString;
    };
    $scope.goToJobbie = function(id){
      $state.go('jobbie', {jobbie_id: id});
    };

  }
]);
