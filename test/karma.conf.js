module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
	   'js/bower_components/angular/angular.js',
      'js/bower_components/angular-route/angular-route.js',
      'js/bower_components/angular-mocks/angular-mocks.js',
	  'js/app.js',
	  'js/controllers/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
