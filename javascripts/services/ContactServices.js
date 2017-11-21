'use strict';


app.service("ContactServices", function ($http, FIREBASE_CONFIG) {

const getContacts = (userId) => {
      // console.log("get contacts", Contact);
  return $http.get(`${FIREBASE_CONFIG.databaseURL}/Contacts.json?orderBy="uid"&equalTo="${userId}"`);
 }; 


const postNewContact = (newContact) => {
    // console.log("postNewContact", newContact);
  return $http.post(`${FIREBASE_CONFIG.databaseURL}/Contacts.json`, JSON.stringify(newContact));
 };



const buildNewContact = (Contacts, userId) => {
    return {
            "FirstName": Contacts.FirstName,
            "LastName": Contacts.LastName,
            "StreetAddress": Contacts.StreetAddress,
            "City": Contacts.City,
            "State": Contacts.State,
            "Zipcode": Contacts.Zipcode,
            "Country": Contacts.Country,
            "Phone": Contacts.Phone,
            "uid":  userId
    };
};

const deleteContact = (userId) => {
    return $http.delete(`${FIREBASE_CONFIG.databaseURL}/Contacts/${userId}.json`);
  };


return {buildNewContact, postNewContact, getContacts, deleteContact};
});