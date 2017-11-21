"use strict";

app.controller("ViewCtrl", function(ContactServices, $scope, $rootScope) {

    $scope.contacts = {};

    const getContacts = () => {
        ContactServices.getContacts($rootScope.uid).then((results) => {
            $scope.contacts = results.data;
            console.log("results getContacts", results.data);
        }).catch((err) => {
            console.log("getContacts", err);
        });
    };
    getContacts();


});

