module.exports = function (grunt) { //this is the wrapper function
  // Do grunt-related things in here (wrapper function)
    grunt.initConfig({ //this is the configuration object
//Most Grunt tasks rely on configuration data defined in an object passed to the grunt.initConfig method
  //1: I CAN STORE THE PROJECT SETTINGS INTO THE PKG PROPERTY. THIS ALLOWS ME TO REFER TO THE VALUES OF PROPERTIES WITHIN
  // MY PACKAGE.JSON FILE: pkg: grunt.file.readJSON('package.json')


        autoprefixer: {
            dist: {
                files: {
                    'src/css/App.css': 'src/css/App.css','src/css/banners.css': 'src/css/banners.css',
                    'src/css/index.css': 'src/css/index.css',

                }
            }
        },
        watch: {
            styles: {
                files: ['src/css/App.css', 'src/css/banners.css', 'src/css/index.css'],
                tasks: ['autoprefixer']
            }
        }
    });
    // Load the plugin that provides the "autoprefixer" task.
    grunt.loadNpmTasks('grunt-autoprefixer');
    // I use grunt-contrib-watch to recompile build/style.css every time style.css changes.
    grunt.loadNpmTasks('grunt-contrib-watch');
};
