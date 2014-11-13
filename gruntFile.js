module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({

    simplemocha: {
      src: ['test/test.js']
    }
  });
  //grunt.registerTask('unicorn', ['unicorn']);
  grunt.registerTask('default', ['simplemocha']);
};
