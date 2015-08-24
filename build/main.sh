browserify                       \
  --transform ./build/transform  \
  --transform babelify           \
  --ignore plug/**/*.js          \
  --exclude underscore           \
  --exclude jquery               \
  --entry src/index              \
  --standalone BPI               \
  -o index.js