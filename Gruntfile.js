'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({

    jscs: {
      src: ['app/js/**/*.js', 'server.js'],
      options: {
        config: '.jscsrc'
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      src: ['models/**/*.js', 'server.js', 'routers/**/*.js', 'app/js/**/*.js']
    },

    clean: {
      dev: {
        src: ['build/']
      }
    },

    copy: {
      dev: {
        cwd: 'app/',
        src: ['**/*.html', 'css/**/*.css'],
        expand: true,
        dest: 'build/'
      }
    },

    browserify: {
      dev: {
        src: ['app/js/**/*.js'],
        dest: 'build/bundle.js',
        options: {
          transform: ['debowerify']
        }
      },

      test: {
        src: ['test/client/**/*test.js'],
        dest: 'test/test_bundle.js',
        options:{
          transform: ['debowerify']
        }
      }
    },

    sass: {
      dist: {
        files: {
          'build/main.css': 'app/scss/main.scss',
          'build/sweetalert.css': 'bower_components/sweetalert/lib/sweet-alert.scss'
        }
      }
    }
  });

  grunt.registerTask('lint', ['jshint', 'jscs']);
  grunt.registerTask('build:dev', ['clean:dev', 'browserify:dev', 'copy:dev', 'sass']);
  grunt.registerTask('build:test', ['browserify:test']);
};
