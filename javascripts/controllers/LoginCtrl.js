"use strict";

app.controller("LoginCtrl", function($location, $rootScope, $scope, AuthService){
  $scope.controller = "LoginCtrl";
    console.log("hello from Login");
    $scope.authenticate = () => {
    AuthService.authenticateGoogle().then((result) =>{
      console.log("hello");
      $rootScope.uid = result.user.uid;
      console.log("result", result.user.uid);
      $scope.$apply(() =>{
        console.log("inside scope apply");
        $location.url("/contacts/new");
      });
    }).catch((err) =>{
      console.log("error in authenticateGoogle", err);
    });
  };
});

