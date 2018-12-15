//gruntfile.js it is pure development asset.
// it exports a function as the entire gruntfile. it passes this object grunt
// nodemon plugin. There are other grunt plugins to run your tests, mimimize your CSS and Javascript, run JSLint or Hint.
module.exports = function (grunt) {
    grunt.initConfig({
        nodemon: {
            all: {
                script: 'server.js',
                options: {
                    watchedExtensions: ['js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-nodemon');
    grunt.registerTask('default', ['nodemon']);

};