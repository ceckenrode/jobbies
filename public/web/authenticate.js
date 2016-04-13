angular.module("jobbiesApp").run(function($rootScope, $state, UserService) {
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
    UserService.isAuthenticated();
    if (toState.authenticate && !UserService.isLoggedIn()) {
      // User isn’t authenticated
      $state.transitionTo("home");
      event.preventDefault();
    }
  });
});
