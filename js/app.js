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
        .state('page', {
            url: "/page/:pageID",
            templateUrl: "partials/page.html",
            controller: "pageCtrl",
            resolve: {
                pageID: function ($stateParams) {
                    return $stateParams.pageID;
                }
            }
        })
        .state('event',  {
            url: "/event/:eventID",
            templateUrl: "partials/event.html",
            controller: "eventCtrl",
            resolve: {
                eventID: function ($stateParams) {
                    return $stateParams.eventID;
                }
            }
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

    if (localStorage.getItem('uid') === null || localStorage.getItem('uid') === undefined) {
        return false;
    } else {
        return true;
    }

});

app.factory('announcements', function () {

});

app.factory('pages', function () {

});

app.factory('events', function () {

});

app.factory('admin', function () {

});

/*
 Controllers
 */

app.controller('homeCtrl', function () {

});

app.controller('eventsCtrl', function () {

});

app.controller('eventCtrl', function () {

});

app.controller('pageCtrl', function () {

});

app.controller('adminCtrl', function () {

});



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
}