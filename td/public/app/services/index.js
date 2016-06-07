var app = require('angular').module('app');
app.factory('routemediator', ['$rootScope', '$location', 'config', 'logger', require('./routemediator')]);
app.factory('datacontext', ['$q', '$http', 'common', require('./datacontext')]);
app.factory('dialogs', ['$rootScope', '$location', '$uibModal', 'common', 'datacontext', require('./dialogs')]);
app.factory('threatengine', ['$q', require('./threatengine')]);
app.factory('diagramming', ['common', require('./diagramming')]);