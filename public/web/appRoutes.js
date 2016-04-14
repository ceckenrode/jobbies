angular.module("jobbiesApp").config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  //
  //For any unmatched routes, redirect to /home
  $urlRouterProvider.otherwise('/');

  //Setting up states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home/home.html',
      authenticate: false
    })
    .state('feed', {
      url: '/feed',
      templateUrl: 'views/feed/feed.html',
      controller: 'FeedController',
      authenticate: false
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/register/register.html',
      controller: 'RegisterController',
      authenticate: false
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'views/dashboard/dashboard.html',
      controller: 'DashboardController',
      authenticate: true
    })
    .state('post', {
      url: '/post',
      templateUrl: 'views/post/post.html',
      controller: 'PostController',
      authenticate: true
    })
    .state('profile', {
      url: '/profile/:userId',
      templateUrl: 'views/profile/profile.html',
      controller: 'ProfileController',
      authenticate: false
    });

  $locationProvider.html5Mode(true);
});
