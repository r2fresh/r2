define(['text!templates/auth.html'], function(template) {
	var AuthView = Backbone.View.extend({
		el : '#sign-in-container',
		template : _.template(template),
		events : {
			'click #authorize-button' : 'auth'
		},
		initialize : function(app) {
			this.app = app;
		},
		render : function() {
			this.$el.html(this.template());
			return this;
		},
		auth : function() {
			console.log(this.app)
			this.app.apiManager.checkAuth();
			return false;
		}
	})

	return AuthView;
})