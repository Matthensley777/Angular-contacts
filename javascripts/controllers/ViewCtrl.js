"use strict";

app.controller("ViewCtrl", function(ContactServices, $scope, $rootScope, $location) {

    $scope.contacts = [];

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

  $scope.editDetail = (Id) => {
    $location.path(`/contacts/edit/${Id}`);
  };

 $scope.addFavorite = (contact, Id) => {
  contact.Favorite = !contact.Favorite;
  let newContact = ContactServices.buildNewContact(contact, $rootScope.uid);
  ContactServices.updateContact(newContact, Id).then(() => {
    getContacts();
  }).catch((err) => {
    console.log("error in addFavorite", err);
  });

 };


});

