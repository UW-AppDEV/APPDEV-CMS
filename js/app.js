/*
 Initialization
 */
var app = angular.module('AppDEV', []);

/*
 Database setup
 */

var database = 'DB'; // TODO: need to add the firebase here.

var localStorage = window.localStorage;

/*
 Routing
 */



/*
 Services
 */

app.factory('$loginCheck', function () {

});

app.factory('announcements', function () {

});

/*
 Controllers
 */



/*
 Helper functions
 */

function setUID (UID) {
    localStorage.setItem('uid', UID);
}

function logOut () {
    setUID(null);
}

var UID = function () {
    if (localStorage.getItem('UID') !== undefined || localStorage.getItem('UID') !== null) {
        return localStorage.getItem('uid')
    } else {
        return undefined;
    }
};