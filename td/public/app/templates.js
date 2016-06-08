(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('templates');
} catch (e) {
  ngModule = angular.module('templates', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('shell.html',
    '<div ng-controller="shell as vm">\n' +
    '    <header ng-if="!vm.suppressBanner" class="clearfix">\n' +
    '        <div ng-include="\'public/app/layout/topnav.html\'"></div>\n' +
    '    </header>\n' +
    '    <section id="content">\n' +
    '        <div ng-view></div>\n' +
    '    </section>\n' +
    '</div>\n' +
    '');
}]);

module.exports = "shell.html";
},{}],2:[function(require,module,exports){
require('./layout/shell.html');
require('./welcome/welcome.html');
},{"./layout/shell.html":1,"./welcome/welcome.html":3}],3:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('templates');
} catch (e) {
  ngModule = angular.module('templates', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('welcome.html',
    '<div data-ng-controller="welcome as vm" class="container-fluid">\n' +
    '    <row>\n' +
    '        <div class="jumbotron">\n' +
    '            <h1>Welcome!</h1>\n' +
    '            <p>\n' +
    '            You\'re ready to start making your application designs more secure. You can open an existing threat model or create a new one by choosing one of\n' +
    '            the options below.\n' +
    '            </p>\n' +
    '            <p>\n' +
    '            <icon class="fa fa-exclamation-triangle text-primary"></icon> <strong class="text-primary">Warning!</strong> Threat Dragon is still in early development (it is an <a target="_blank" href="https://www.owasp.org/index.php/OWASP_Threat_Dragon">\n' +
    '            OWASP incubator project</a>) so it might have some bugs and the data model could change without warning, leaving you\n' +
    '            unable to open your threat models.\n' +
    '            </p>\n' +
    '        </div>\n' +
    '    </row>\n' +
    '    <row> \n' +
    '        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\n' +
    '            <div class="jumbotron">\n' +
    '                <div class="text-center">\n' +
    '                    <a href="#/threatmodel">\n' +
    '                        <span title="Open a Model From GitHub" class="fa fa-github fa-5x text-primary"></span>\n' +
    '                    </a>\n' +
    '                </div>\n' +
    '                <div>\n' +
    '                    <br>\n' +
    '                    <p>\n' +
    '                        Open an existing threat model from a GitHub repo\n' +
    '                    </p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\n' +
    '            <div class="jumbotron">\n' +
    '                <div class="text-center">\n' +
    '                    <a href="#/new/threatmodel">\n' +
    '                        <span title="Create a new model" class="fa fa-plus fa-5x text-primary"></span>\n' +
    '                    </a>\n' +
    '                </div>\n' +
    '                <div>\n' +
    '                    <br>\n' +
    '                    <p>\n' +
    '                        Create a completely new, empty threat model\n' +
    '                    </p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\n' +
    '            <div class="jumbotron">\n' +
    '                <div class="text-center">\n' +
    '                    <a href="" ng-click="vm.loadDemoModel()">\n' +
    '                        <span title="Download and explore a sample threat model" class="fa fa-cloud-download fa-5x text-primary"></span>\n' +
    '                    </a>\n' +
    '                </div>\n' +
    '                <div>\n' +
    '                    <br>\n' +
    '                    <p>\n' +
    '                        Download and explore a sample threat model\n' +
    '                    </p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </row>\n' +
    '</div>');
}]);

module.exports = "welcome.html";
},{}]},{},[2]);
