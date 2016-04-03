angular.module("jobbiesApp").controller('DashboardController', ['$scope', '$http', '$state', '$stateParams', function($scope, $http, $state, $stateParams){
 $http.post('/test', {hi: 'hi'});
}]);