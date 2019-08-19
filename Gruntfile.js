'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'tasks/*.js', '<%= nodeunit.tests %>'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    clean: {
      tests: ['tmp']
    },

    file_minify: {
      default: {
        files: {
          'tmp/': ['test/fixtures/*.*']
        }
      }
    },

    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['clean', 'file_minify', 'nodeunit']);
  grunt.registerTask('default', ['jshint', 'test']);
};
