module.exports = function(grunt){

    grunt.initConfig({
        concat: {
            options: {
                //separator: ';',
            },
            js: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'assets/scripts/one.js'
                ],
                dest: 'assets/scripts/built.max.js'
            }
        },
        uglify: {
            build: {
                src: 'assets/scripts/built.max.js',
                dest: 'build/js/built.min.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: "assets/images/",
                    src: ['**/*.{png,jpg,jpeg,gif}'],
                    dest: 'build/imgs/'
                }]
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    //dest <= source
                    'build/css/global.unpref.css' : 'assets/scss/style.scss'
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 9']
            },
            dist: {
                //target file list
                files : {
                    //dest <= src
                    'build/css/main.css' :
                        'dev/css/p1.css'
                }
            }
        },

        watch: {
            options: {
                livereload: true,
            },
            /*scripts: {
                files: [
                    'assets/scripts/!*.js',
                    'assets/scripts/!**!/!*.js'
                ],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                }
            },*/
            css: {
                files: ['dev/css/*.css'],
                tasks: ['autoprefixer'],
                options: {
                    spawn: false
                }
            }/*,
             pref_css: {
             files: ['build/css/global.unpref.css'],
             tasks: ['autoprefixer'],
             options: {
             spawn: false
             }
             }*/

        }

    });

    //grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-imagemin");
    grunt.loadNpmTasks("grunt-autoprefixer");
    grunt.loadNpmTasks("grunt-contrib-watch");


    grunt.registerTask("default", [
        /*"concat",  "imagemin",  "autoprefixer",*/ "watch"
    ]);

}