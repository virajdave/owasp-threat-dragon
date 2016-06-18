var app = require('angular').module('app');
app.factory('datacontext', ['$q', '$http', 'common', require('./datacontext')]);
app.factory('dialogs', ['$rootScope', '$location', '$uibModal', 'common', 'datacontext', require('./dialogs')]);
