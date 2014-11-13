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

app.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /404
    $urlRouterProvider.otherwise("/404");
    //
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "partials/home.html",
            controller: "homeCtrl"
        })
        .state('about', {
            url: "/about",
            templateUrl: "partials/about.html",
            controller: "aboutCtrl"
        })
        .state('events', {
            url: "/events",
            templateUrl: "partials/events.html",
            controller: "eventsCtrl"
        })
        .state('admin', {
            url: "/admin",
            templateUrl: "partials/admin.html",
            controller: "adminCtrl"
        })
        .state('404', {
            url: '404',
            templateUrl: "partials/404.html",
            controller: "404Ctrl"
        });

});

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