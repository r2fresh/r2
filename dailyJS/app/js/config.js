define([],function(){
	var config = {};
	config.apiKey = 'AIzaSyDrtURbBsFGOhpoUUMUUYzRDuYk5LJ89SA';
	config.scopes = 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile';
	config.clientId = '1031235177260.apps.googleusercontent.com';

	_.templateSettings = {
		interpolate: /\{\{(.+?)\}\}/g
	}

	return config;
})