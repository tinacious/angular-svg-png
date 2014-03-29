/*
* AngularJS SVG to PNG fallback
* https://github.com/tinacious/angular-svg-png
* @tinaciousdesign
*/

'use strict';

angular.module('svgPngFallback', [])
  .directive('img', function (Modernizr) {
    return {
      restrict: 'E',
      link: function (scope, elem, attrs) {
        if ( Modernizr && !Modernizr.svg ) {
          elem.attr('src', attrs.src.replace('.svg', '.png'));
        }
      }
    };
  });