'use strict';

app.run(function(FIREBASE_CONFIG){
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
  $routeProvider
    .when("/login", {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    })
    .when("/favs", {
      templateUrl: 'partials/contacts/favs.html',
      controller: 'FavsCtrl'
    })
    .when("/new", {
      templateUrl: 'partials/contacts/new.html',
      controller: 'NewCtrl'
    })
    .when("/view", {
      templateUrl: 'partials/contacts/view.html',
      controller: 'ViewCtrl'
    })
    .otherwise('/login');
});