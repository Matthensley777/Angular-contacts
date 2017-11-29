"use strict";

app.controller("FavsCtrl", function($scope, ContactServices, $rootScope, $location){
  const getContacts = () => {
    ContactServices.getFavoriteContacts($rootScope.uid).then((results) =>{
      $scope.contacts = results;
    }).catch((err) =>{
      console.log("error in getContacts", err);
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



});

  
