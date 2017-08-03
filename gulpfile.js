'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const del = require('del');
const runSequence = require('run-sequence');
const AWS = require('aws-sdk')
const webpack = require('webpack')
let version

//COMMON
gulp.task('clean', function() {
  return del([
    './dest/',
    './.tmp/'
  ], {force: true});
});

gulp.task('build:webpack', cb => {
  // We need to set NODE_ENV to production to get a deployable build
  // DON'T IMPORT THE WEBPACK CONFIG BEFORE THIS IS DONE
  $.env.set({ NODE_ENV: 'production' })
  const webpackConfig = require('./webpack.config')

  // Now run webpack with production config
  webpack(webpackConfig, (err, stats) => {
    if (err || stats.compilation.errors.length > 0) {
      throw new $.util.PluginError('webpack', err || stats.compilation.errors[0])
    } else {
      version = stats.hash
      cb()
    }
  })
})

gulp.task('publish:s3', () => {
  const awsConfig = {
    key: AWS.config.credentials.accessKeyId,
    secret: AWS.config.credentials.secretAccessKey,
    region: 'eu-west-1',
    params: {
      Bucket: 'lobbyapp.frontend.foundersfactory.com'
    },
    httpOptions: {
      timeout: 1200000 // 12mins
    }
  }

  const publisher = $.awspublish.create(awsConfig)
  const headers = {
    'Cache-Control': 'max-age=300, public'
  }

  return gulp.src(['dest/**', '!dest/**/*.js.map'])
    .pipe(publisher.publish(headers, { force: true }))
    .pipe(publisher.cache())
    .pipe($.awspublish.reporter())
})

gulp.task('publish', ['clean'], function(){
  runSequence('build:webpack', 'publish:s3');
})
