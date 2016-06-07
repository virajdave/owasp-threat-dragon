'use strict';

var app = require('angular').module('app');

app.directive('tmtPager', [function () {

    var directive = {
        templateUrl: './public/app/pager.html',
        link: link,
        restrict: 'E',
        scope: {
            canPrevious: '=',
            canNext: '=',
            page: '=',
            items: '=',
            next: '&',
            previous: '&',
            select: '&'
        }
    };

    return directive;

    function link(scope, element, attrs) {
    }

}]);




