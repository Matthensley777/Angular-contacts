'use strict';


app.service("ContactServices", function($http, FIREBASE_CONFIG, $q) {

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
            "uid": userId,
            "Favorite": Contacts.Favorite
        };
    };

    const getFavoriteContacts = (userId) => {
        let contacts = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/Contacts.json?orderBy="uid"&equalTo="${userId}"`).then((results) => {
                let fbContacts = results.data;
                Object.keys(fbContacts).forEach((key) => {
                    if (fbContacts[key].Favorite) {
                        fbContacts[key].id = key;
                        contacts.push(fbContacts[key]);
                    }
                });
                resolve(contacts);
            }).catch((err) => {
                reject(err);
            });
        });
    };

    const deleteContact = (Id) => {
        return $http.delete(`${FIREBASE_CONFIG.databaseURL}/Contacts/${Id}.json`);
    };


    const deleteAllContacts = () => {
        return $http.delete(`${FIREBASE_CONFIG.databaseURL}/Contacts.json`);
    };

    const getSingleContact = (Id) => {
        return $http.get(`${FIREBASE_CONFIG.databaseURL}/Contacts/${Id}.json`);
    };

    const updateContact = (contact, Id) => {
        return $http.put(`${FIREBASE_CONFIG.databaseURL}/Contacts/${Id}.json`, JSON.stringify(contact));
    };


    return {
        buildNewContact,
        postNewContact,
        getContacts,
        deleteContact,
        getSingleContact,
        updateContact,
        getFavoriteContacts,
        deleteAllContacts
    };
});