"use strict";

app.controller("DetailCtrl", function($location, $scope, $routeParams, ContactServices) {

    $scope.contact = {};

    const getContact = () => {
        ContactServices.getSingleContact($routeParams.Id).then((results) => {
            $scope.contact = results.data;
        }).catch((err) => {
            console.log("getSingleContact", err);
        });
    };
    getContact();

    $scope.editContact = (contact) => {
        let editContacts = ContactServices.updateContact(contact);
        ContactServices.updateContact(editContacts, contact, contact.id).then((results) => {
            console.log("editContact", results.data);
        }).catch((err) => {
            console.log("updateContact", err);
        });
    };
    

$scope.deleteContact = (Id) => {
    ContactServices.deleteContact(Id).then((result) =>{
     ContactServices.getContacts();
    }).catch((err) =>{
      console.log("error in deleteContact", err);
    });
  };

  $scope.editDetail = () => {
    $location.path(`/contacts/edit/${$routeParams.Id}`);
  };

});