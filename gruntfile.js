'use strict';

var shell = require('shelljs');
var path = require('path');


module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                jshintrc: true
            },
            files: [
                'src/**/*.js'
            ]
        },

        browserify2: {
            main: {
                entry: './src/game.js',
                compile: './dist/index.js',
                debug: true
            }
        },

        connect: {
            server: {
                options: {
                    port: 9001,
                    base: './'
                }
            }
        },
    
        open: {
            server: {
                url: 'http://127.0.0.1:9001/index.html',
                app: 'Google Chrome'
            }
        },
    
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src/debug-assets/', src: '*.html', dest: 'dist/'},
                    {expand: true, cwd: 'src/debug-assets/', src: 'style/**', dest: 'dist/'}
                ]
            }
        },

        watch: {
            js: {
                files: [
                    'src/**/*.js',
                    'debug-assets/**/*.js'
                ],
                tasks: [
                    'jshint',
                    'browserify2',
                    'copy'
                ],
                options: {
                    livereload: true
                }
            },

            assets: {
                files: [
                    'src/debug-assets/**/*.html'
                ],
                tasks: [
                    'copy'
                ],
                options: {
                    livereload: true
                }
            },

            css: {
                files: [
                    'src/debug-assets/style/**/*'
                ],
                tasks: [
                    'copy'
                ],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-browserify2');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('test', [
        'mocha',
        'jshint'
    ]);


    grunt.registerTask('test-debug', 'launch tests for debugging', function() {
        shell.exec('node --debug-brk /usr/local/bin/_mocha');
    });

    grunt.registerTask('mocha', 'launch tests', function() {
        shell.exec('mocha');
    });

    grunt.registerTask(
        'default',
        [
            'browserify2',
            'copy',
            'connect',
            'open',
            'watch'
        ]
    );
};
