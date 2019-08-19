'use strict';

var minifier = require('string-minify');

module.exports = function(grunt) {
  grunt.registerMultiTask(
    'file_minify',
    'A plugin for simple file minification by removing extra whitespaces, tabs and newline characters.',
    function() {
      this.files.forEach(function(file) {
        file.src.map(function(filepath) {
          var fileName = filepath
            .split('/')
            .slice(-1)
            .pop();
          var fileContent = grunt.file.read(filepath);
          grunt.file.write(file.dest + fileName, minifier(fileContent));
        });
      });
      grunt.log.success('All files were processed 🎉');
    }
  );
};
