/* jshint node: true */
/* global describe, it */

'use strict';

var appdmg = require('../');
var gulp = require('gulp');

require('mocha');

describe('gulp-appdmg', function() {

  it('default test', function(done) {
    var errored = false;

    gulp.src([])
      .pipe(appdmg({
        source: 'test/res/appdmg.json',
        target: 'test/build/app.dmg'
      }))
      .on('end', function() {
        if (!errored) {
          done();
        }
      })
      .on('error', function(err) {
        errored = true;
        done(err);
      });
  });

});
