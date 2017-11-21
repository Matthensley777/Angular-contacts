"use strict";

app.controller("ViewCtrl", function(ContactServices, $scope, $rootScope, newCtrl, $routeParams) {

    $scope.contacts = {};
    console.log('contacts.id', $routeParams.id);

    const getContacts = () => {
        ContactServices.getContacts($routeParams.id).then((results) => {
            $scope.contacts = results.data;
        }).catch((err) => {
            console.log("getContacts", err);
        });
    };
    getContacts();


});