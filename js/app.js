/*
 Initialization
 */
var app = angular.module('AppDEV', ['firebase']);

/*
 Database setup
 */

var database = 'https://appdev.firebaseio.com/';

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

// Returns if the user is logged in or not.
app.factory('$loginCheck', function () {

    return (localStorage.getItem('uid') === null ||
    localStorage.getItem('uid') === undefined);

});

app.factory('announcements', function () {

    return {

        getAll: function () {

        },

        getByID : function (ID) {

        },

        add: function (announcementObj) {

        },

        removeByID: function (ID) {

        },

        updateByID: function (ID) {

        }

    }

});

app.factory('pages', function () {

    return  {

        getAll: function () {

        },

        getByID : function (ID) {

        },

        add: function (pageObj) {

        },

        removeByID: function (ID) {

        },

        updateByID: function (ID) {

        }

    }

});

app.factory('events', function () {

    return  {

        getAll: function () {

        },

        getByID : function (ID) {

        },

        add: function (eventObj) {

        },

        removeByID: function (ID) {

        },

        updateByID: function (ID) {

        }

    }

});

app.factory('admin', function () {

    return {

        shit: "Some shit"

    }

});

/*
 Controllers
 */

app.controller('homeCtrl', function () {

    /*
     Initialization
     */

    /*
     Ui Tweaks
     */

});

app.controller('eventsCtrl', function () {

    /*
     Initialization
     */

    /*
     Ui Tweaks
     */

});

app.controller('eventCtrl', function () {

    /*
     Initialization
     */

});

app.controller('pageCtrl', function () {

    /*
     Initialization
     */

    /*
     Ui Tweaks
     */

});

app.controller('adminCtrl', function () {

    /*
     Initialization
     */

    /*
     Ui Tweaks
     */

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