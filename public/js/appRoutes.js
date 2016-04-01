angular.module("jobbiesApp").config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  //
  //For any unmatched routes, redirect to /home
  $urlRouterProvider.otherwise('/');

  //Setting up states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home/home.html'
    })
    .state('feed', {
      url: '/feed',
      templateUrl: 'views/feed/feed.html',
      controller: 'FeedController'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/register/register.html',
      controller: 'RegisterController'
    })
    .state('post', {
      url: '/post',
      templateUrl: 'views/post/post.html',
      controller: 'PostController'
    });

  $locationProvider.html5Mode(true);
});