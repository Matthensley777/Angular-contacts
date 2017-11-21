"use strict";

app.controller("NewCtrl", function($location, $scope, $rootScope, ContactServices){

$scope.createNewContact = (contact) => {
                let newContact = ContactServices.buildNewContact(contact, $rootScope.uid);
                ContactServices.postNewContact(newContact).then((results)=> {
                	console.log("results in createNewContact", results);
                    $location.path('/contacts/view');
                }).catch((err)=> {
                    console.log("err in createNewContact", err);
                });
        };

});




