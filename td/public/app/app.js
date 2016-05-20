'use strict';

var angular = require('angular');
require('angular-route');
require('angular-xeditable');
window.jQuery = require('jquery');
require('bootstrap');
require('lodash');
require('backbone');
require('jointjs');
require('toastr');

//temporary fix for Chrome/Jointjs problem
SVGElement.prototype.getTransformToElement = SVGElement.prototype.getTransformToElement || function (toElement) {
    return toElement.getScreenCTM().inverse().multiply(this.getScreenCTM());
};

var app = angular.module('app', ['ui.bootstrap', 'ngRoute', 'common', 'xeditable']);

//require custom modules, services, controllers and directives
require('./common');
require('./config');
require('./config.route');
require('./services');
require('./layout');
require('./diagrams');

app.run(['$rootScope', '$location',
    function ($rootScope, $location) {
        $rootScope.location = $location;
    }]);

// Handle routing errors and success events
app.run(['$route', '$rootScope', 'routemediator',
    function ($route, $rootScope, routemediator) {
        routemediator.setRoutingHandlers();
    }]);

//config for angular-xeditable
app.run(function (editableOptions) {
    editableOptions.theme = 'bs3';
});