'use strict';

app.run(function(FIREBASE_CONFIG){
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
  $routeProvider
    .when("/Favs", {
      templateUrl: 'partials/contacts/favs.html',
      controller: 'FavsCtrl'
    })
    .when("/New", {
      templateUrl: 'partials/contacts/new.html',
      controller: 'NewCtrl'
    })
    .when("/View", {
      templateUrl: 'partials/contacts/view.html',
      controller: 'ViewCtrl'
    })
    .otherwise('/auth');
});