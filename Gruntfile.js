'use strict';

module.exports. = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.initConfig({
    pkg grunt.file.readJSON('package.json'),

    jscs: {
      src: ['models/**/*.js', 'server.js', 'routers/**/*.js'],
      options: {
        config: '.jscsrc'
      }
    },

    jshint: {
      options: {
        node: true
      },
      src: ['models/**/*.js', 'server.js', 'routers/**/*.js']
    },

    clean: {
      dev: {
        src: ['build/']
      }
    },

    copy: {
      dev: {
        cwd: 'app/',
        src: ['**/*.html', 'css/**/*.css' ],
        expand: true,
        dest: 'build/'
      }
    },

    browserify: {
      dev: {
        src: ['app/js/**/*.js'],
        dest: 'test/test_bundle.js',
        options: {
          transform: ['debowerify']
        }
      }
    }
  });
  grunt.registerTask('lint', ['jshint', 'jscs']);
  grunt.registerTask('build:dev', ['lint', 'clean:dev', 'browserify:dev', 'copy:dev'});
};

