"use strict";

app.controller("NewCtrl", function($location, $scope, $rootScope, ContactServices){

$scope.createNewContact = (contact) => {
                let newContact = ContactServices.buildNewContact($rootScope.uid);
                ContactServices.postNewContact(newContact).then(()=> {
                    $location.path('/view');
                }).catch((err)=> {
                    console.log("err in createNewContact", err);
                });
        };
});




