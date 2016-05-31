var app = app ||  {};

//Todo Model

app.Todo = Backbone.Model.extend({

	//Defaults attributes 
	defaults: {
		title: '',
		completed: false
	},

	//Toggle the 'completed' state of this todo item
	toggle: function() {
		this.save({
			completed: !this.get('completed')
		});
	}
});
