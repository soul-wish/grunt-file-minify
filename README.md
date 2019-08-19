# grunt-file-minify [![Build Status](https://travis-ci.org/soul-wish/grunt-file-minify.svg?branch=master)](https://travis-ci.org/soul-wish/grunt-file-minify)

> A plugin for simple file minification by removing extra whitespaces, tabs and newline characters.

## Getting Started

```shell
npm install grunt-file-minify --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-file-minify');
```

## The "file_minify" task

### Overview

In your project's Gruntfile, add a section named `file_minify` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  file_minify: {
    default: {
      files: {
        // Target-specific file lists and/or options go here.
        'dest/dir/': ['some/src/*.*', 'some/other/src/*.twig']
      }
    }
  }
});
```

## License

MIT © [Sergey Lysenko](http://soulwish.info)
