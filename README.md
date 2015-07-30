gulp-appdmg
========================

Generate beautiful DMG-images for your OS X applications.

## Information

<table>
  <tr>
    <td>Package</td>
    <td>gulp-appdmg</td>
  </tr>
  <tr>
    <td>Description</td>
    <td>A simple wrapper for `node-appdmg`</td>
  </tr>
  <tr>
    <td>Node Version</td>
    <td>>= 0.10</td>
    </tr>
</table>

## Usage

```javascript
var appdmg = require('gulp-appdmg');

gulp.task('release-osx', function() {
  return gulp.src([])
    .pipe(appdmg({
      source: 'test/appdmg.json',
      target: 'test.dmg'
    }));
});

```

## Options

You only have to pass the `source` and `target`.

Read [node-appdmg's README](https://github.com/LinusU/node-appdmg) for more information.

## License

The MIT License (MIT)

Copyright (c) 2015 Alexandru Rosianu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
