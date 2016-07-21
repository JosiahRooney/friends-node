var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    // app.get('/');
    .when('/', {
        templateUrl: 'partials/list.html'
    })
    // app.get('/friends/new', friends.create);
    .when('/friend/new', {
        templateUrl: 'partials/new.html'
    })
    // app.get('/friend/:id/edit', friends.update);
    .when('/friend/:id/edit', {
        templateUrl: 'partials/edit.html'
    })
    .otherwise({
        redirectTo: '/'
    });

});