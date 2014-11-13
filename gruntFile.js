module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-unicorn');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    unicorn: {
      options: {

      },

      src: ['trees/**/*.js']
    },

    simplemocha: {
      src: ['test/test.js']
    }
  });
  grunt.registerTask('default', ['unicorn', 'simplemocha']);
};
