"use strict";

app.controller("ViewCtrl", function(ContactServices, $scope, $rootScope, $location) {

    $scope.contacts = {};

    const getContacts = () => {
        ContactServices.getContacts($rootScope.uid).then((results) => {
            $scope.contacts = results;
        }).catch((err) => {
            console.log("getContacts", err);
        });
    };
    getContacts();

    $scope.deleteContact = (Id) => {
    ContactServices.deleteContact(Id).then((result) =>{
      getContacts();
    }).catch((err) =>{
      console.log("error in deleteContact", err);
    });
  };

  $scope.contactDetail = (Id) => {
    $location.path(`/contacts/detail/${Id}`);
  };


});

