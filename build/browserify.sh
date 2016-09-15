#!/bin/sh

browserify                                 \
  --transform ./build/plug-modulesify      \
  --ignore plug/**/*.js                    \
  --exclude underscore                     \
  --exclude jquery                         \
  --exclude backbone                       \
  --entry rollup.js                        \
  --standalone BPI                         \
