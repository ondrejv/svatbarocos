module.exports = function (grunt) {

    // Configuration goes here
    grunt.initConfig({
        less: {
            development: {
                files: {
                    'assets/css/spirito.css': 'assets/css/less/spirito.less',
                }
            }
        },
        watch: {
            development: {
                files: ['assets/css/less/*.less', 'assets/css/less/*/*.less'],
                tasks: ['less:development'],
            },
            justreload: {
                options: { livereload: true },
                files: ['assets/css/*.css', 'index.html'],
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['watch']);

};
