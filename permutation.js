$(document).ready(function() {
	// Stuff to do as soon as the DOM is ready;

	$('#div1').sortable({
		revert: 1000,
		connectWith: '#div2',
		start: function(event, ui){
			$('#result').html($('#result').html() + '<b>start</b>');
		},

		stop: function(event, ui){
			$('#result').html($('#result').html() + 'stop <br />');
		},

		//sort: function(event, ui){
		//	$('#result').html($('#result').html() + 'sort');
		//},

		change: function(event, ui){
			$('#result').html($('#result').html() + 'change');
		},

		beforeStop: function(event, ui){
			$('#result').html($('#result').html() + 'beforeStop');
		},

		update: function(event, ui){
			$('#result').html($('#result').html() + 'update');
		},

		remove: function(event, ui){
			$('#result').html($('#result').html() + 'remove');
		},

		receive: function(event, ui){
			$('#result').html($('#result').html() + 'receive');
		},

		activate: function(event, ui){
			$('#result').html($('#result').html() + 'activate');
		},

		deactivate: function(event, ui){
			$('#result').html($('#result').html() + 'deactivate');
		},
	});

	$('#div2').sortable({
		revert: 1000,
		connectWith: '#div1'
	});

});