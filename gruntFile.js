module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-unicorn');

  grunt.initConfig({
    unicorn: {
      options: {

      },

      src: ['trees/**/*.js']
    }
  });
  grunt.registerTask('default', ['unicorn']);
};
