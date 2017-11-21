'use strict';


app.service("ContactServices", function ($http, FIREBASE_CONFIG, $q) {

const getContacts = (userId) => {
let Contacts = [];  
return $q((resolve, reject) => {
$http.get(`${FIREBASE_CONFIG.databaseURL}/Contacts.json?orderBy="uid"&equalTo="${userId}"`).then((results) => {
        let fbContacts = results.data;
        Object.keys(fbContacts).forEach((key) => {
          fbContacts[key].id = key;
          Contacts.push(fbContacts[key]);
        });
        resolve(Contacts);
      }).catch((err) => {
        reject(err);
      });
    });
 }; 


const postNewContact = (newContact) => {
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

const deleteContact = (Id) => {
    return $http.delete(`${FIREBASE_CONFIG.databaseURL}/Contacts/${Id}.json`);
  };


return {buildNewContact, postNewContact, getContacts, deleteContact};
});