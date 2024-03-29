$(document).ready(function() {
	$('#div1 span').draggable({
/*		start: function(event, ui){
			$('#start').text(ui.offset.top + ', ' + ui.offset.left);
		},
		drag: function(event, ui){
			$('#drag').text(ui.offset.top + ', ' + ui.offset.left);
		},
		stop: function(event, ui){
			$('#stop').text(ui.offset.top + ', ' + ui.offset.left);
		},*/
		//containment: '#div1',
		//axis: 'x',
		helper: 'clone'

	}).bind('dragstop', f = function(event, ui){
			ui.helper.clone().appendTo($(this).parent())
			.draggable({helper: 'clone'}).bind('dragstop', f);
			$(this).remove();
		});

	$('#books img').draggable({
		revert: 'invalid'
	});

	$('#shopping img.basket').droppable({
		hoverClass: 'hover',
		drop: function(event, ui){
			$('#shopping').append(ui.draggable);
			$(ui.draggable).css({position: 'relative', top: '0px', left: '0px'})
			//.draggable('disable').css({opacity : 1});
			.addClass('bought');
		}
	});

	$('#books').droppable({
		accept: '.bought',
		drop: function(event, ui){
			$('#books').append(ui.draggable);
			$(ui.draggable).css({position: 'relative', top: '0px', left: '0px'}).removeClass('bought');
		}
	});

	$('#div2').selectable({
		start: function(event){
			$('#result').html($('#result').html() + '<b>start</b>');
		},

		stop: function(event){
			$('#result').html($('#result').html() + ', stop');
		},

		selecting: function(event, ui){
			$('#result').html($('#result').html() + ', selecting');
		},

		unselecting: function(event, ui){
			$('#result').html($('#result').html() + ', unselecting');
		},

		selected: function(event, ui){
			$('#result').html($('#result').html() + ', selected');
		},

		unselected: function(event, ui){
			$('#result').html($('#result').html() + 'unselected');
		},
		//filter: 'p:first-child'
		distance: 1
	});
});