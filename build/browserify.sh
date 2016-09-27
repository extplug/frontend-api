#!/bin/sh

browserify                                 \
  --plugin deumdify                        \
  --exclude underscore                     \
  --exclude jquery                         \
  --exclude backbone                       \
  --entry rollup.js                        \
  --standalone BPI                         \
