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

	$('#covers img').draggable({
		revert: 'invalid',
		connectToSortable: '#titles'
	});

	$('#titles').sortable({
		placeholder: 'placeholder',
		forcePlaceholderSize: true,
		sort: function(event, ui){
			ui.placeholder[0].height = ui.helper[0].height;
			ui.placeholder[0].src = ui.helper[0].src;
		},
		receive: function(event, ui){
			ui.item.draggable('destroy');
		}

	});

	$('#resize').resizable({
		//autoHide: true,
		//ghost: true

		//start: function(event, ui){
		//	$('#dimension').text('width = ' + ui.originalSize.width + ', height = '
		//		+ ui.originalSize.height);
		//},
		resize: function(event, ui){
			$('#dimension').text('width = ' + ui.size.width + ', height = '
				+ ui.size.height + 'top: ' + ui.position.top);
		}, 
		//animate: true, 
		helper: 'helper'
	});

	$('#test1').resizable({
		handles: "e"
	});

	$('#test2').resizable();

});