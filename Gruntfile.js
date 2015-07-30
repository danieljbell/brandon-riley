module.exports = function(grunt) {
 
grunt.initConfig({

pkg: grunt.file.readJSON('package.json'),

sass: {
  dist: {
    options: {
      style: 'compressed'
    },
    files: {
      'css/unprefixed-main.css': 'css/main.scss'
    }
  }
},

autoprefixer: {
    dist: {
        files: {
            'css/main.css': 'css/unprefixed-main.css'
        }
    }
},

watch: {
  css: {
    files: ['scss/*.scss'],
    tasks: ['sass', 'autoprefixer'],
  }
},


uglify: {
  my_target: {
    files: {
      'js/site.min.js': ['js/libs/jquery.js', 'js/libs/fancybox.js', 'js/site.js']
    }
  }
},

imagemin: {
    dynamic: {
      files: [{
        expand: true,
        cwd: 'img/',
        src: ['**/*.{png,jpg,gif}'],
        dest: 'img/dist'
      }]
    }
  }




});
 
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
 
    grunt.registerTask('default',['sass', 'autoprefixer', 'uglify', 'imagemin', 'watch']);
};