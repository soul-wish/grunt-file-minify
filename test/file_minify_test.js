'use strict';

var grunt = require('grunt');

exports.file_minify = {
  default: function(test) {
    test.expect(3);

    var textActualFile = grunt.file.read('tmp/text.txt');
    var htmlActualFile = grunt.file.read('tmp/html.html');
    var twigActualFile = grunt.file.read('tmp/twig.twig');

    var expectedTextFile = grunt.file.read('test/expected/text.txt');
    var expectedHtmlFile = grunt.file.read('test/expected/html.html');
    var expectedTwigFile = grunt.file.read('test/expected/twig.twig');
    test.equal(textActualFile, expectedTextFile, 'Text files should be identical.');
    test.equal(htmlActualFile, expectedHtmlFile, 'HTML files should be identical.');
    test.equal(twigActualFile, expectedTwigFile, 'Twig files should be identical.');

    test.done();
  }
};
