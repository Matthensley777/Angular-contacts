"use strict";

app.controller("EditCtrl", function($location, $scope, $rootScope, ContactServices, $routeParams){

const getContact = () => {
        ContactServices.getSingleContact($routeParams.Id).then((results) => {
            $scope.newContact = results.data;
        }).catch((err) => {
            console.log("getSingleContact", err);
        });
    };
    getContact();


$scope.createNewContact = (contact) => {
                let newContact = ContactServices.buildNewContact(contact, $rootScope.uid);
                ContactServices.updateContact(newContact, $routeParams.Id).then((results)=> {
                	console.log("results in createNewContact", results);
                    $location.path('/contacts/view');
                }).catch((err)=> {
                    console.log("err in createNewContact", err);
                });
        };

});