var app = require('angular').module('app');
var elementPropertyDirectives = require('./elementpropertydirectives');
app.directive('tmtModalClose', [elementPropertyDirectives.modalClose]);
app.directive('tmtElementProperties', [elementPropertyDirectives.elementProperties]);
app.directive('tmtElementThreats', ['$routeParams', '$location', 'common', 'dialogs', elementPropertyDirectives.elementThreats]);
app.controller('diagram', ['$scope', '$location', '$routeParams', '$timeout', 'dialogs', 'common', 'datacontext', 'threatengine', 'diagramming', require('./diagram')]);