requirejs.config({
	baseUrl: 'js',
	paths: {
		text : 'lib/text'
	},
	shim: {
		'lib/jquery/jquery.min' : {
			exports : '$'
		},
		'lib/underscore-amd/underscore-min' : {
			exports : '_'
		},
		'lib/backbone-amd/backbone-min' :{
			deps : ['lib/underscore-amd/underscore-min'],
			exports : 'Backbone'
		},
		'app':{
			deps : ['lib/jquery/jquery.min','lib/underscore-amd/underscore-min','lib/backbone-amd/backbone-min']
		}
	}
});

require(['app'], function(App) {
	window.bTask = new App();
});