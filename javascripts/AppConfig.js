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
    .when("/contacts/favs", {
      templateUrl: 'partials/contacts/favs.html',
      controller: 'FavsCtrl'
    })
    .when("/contacts/new", {
      templateUrl: 'partials/contacts/new.html',
      controller: 'NewCtrl'
    })
    .when("/contacts/view", {
      templateUrl: 'partials/contacts/view.html',
      controller: 'ViewCtrl'
    })
    .otherwise('/login');
});