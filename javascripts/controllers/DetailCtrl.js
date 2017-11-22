"use strict";

app.controller("DetailCtrl", function($scope, $routeParams, ContactServices) {

    $scope.contact = {};

    const getContact = () => {
        ContactServices.getSingleContact($routeParams.Id).then((results) => {
            $scope.contact = results.data;
            console.log("getContacts", results.data);
        }).catch((err) => {
            console.log("getSingleContact", err);
        });
    };
    getContact();




});