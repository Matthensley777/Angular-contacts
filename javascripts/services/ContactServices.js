'use strict';


app.service("ContactServices", function ($http, FIREBASE_CONFIG) {

const getContacts = (newContact) => {
  return $http.post(`${FIREBASE_CONFIG.databaseURL}/Contacts.json`, JSON.stringify(newContact));
 };

getContacts();

const postNewContact = (newContact) => {
  return $http.post(`${FIREBASE_CONFIG.databaseURL}/Contacts.json`, JSON.stringify(newContact));
 };

postNewContact();


const buildNewContact = (Contacts) => {
    return {
            "First_Name": Contacts.First_Name,
            "Last_Name": Contacts.Last_Name,
            "Street_Address": Contacts.Street_Address,
            "City": Contacts.City,
            "State": Contacts.State,
            "Zipcode": Contacts.Zipcode,
            "Country": Contacts.Country,
            "Phone": Contacts.Phone,
            "uid":  Contacts.uid
    };
};
return {buildNewContact, postNewContact, getContacts};
});