/*
* AngularJS SVG to PNG fallback
* https://github.com/tinacious/angular-svg-png
* @tinaciousdesign
*/

'use strict';

angular.module('svgPng', [])
  .directive('img', function () {
    return {
      restrict: 'E',
      link: function (scope, elem, attrs) {
        if ( Modernizr && !Modernizr.svg ) {
          elem.attr('src', attrs.src.replace('.svg', '.png'));
        }
      }
    };
  });