angular.module("jobbiesApp").run(function ($rootScope, $state, UserService) {
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
    if (toState.authenticate && !UserService.isAuthenticated()){
      // User isn’t authenticated
      $state.transitionTo("home");
      event.preventDefault(); 
    }
  });
});