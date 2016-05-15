'use strict'

var app = require('angular').module('app');
var common = require('./common');
var logger = require('./logger');

var commonModule = angular.module('common', []);
commonModule.provider('commonConfig', common.commonConfig);
commonModule.factory('common', ['$q','$rootScope', 'commonConfig', 'logger', common.commonModule]);
commonModule.factory('logger', ['$log', logger]);



