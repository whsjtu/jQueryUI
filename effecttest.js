$(document).ready(function() {
	// Stuff to do as soon as the DOM is ready;
/*
	$('#img1').effect('blind', {mode:'hide', direction: 'horizontal'}, 1000);
	//$('#img2').effect('blind', {mode:'show', direction: 'vertical'}, 10000);
	$('#img2').effect('slide');
	$('#p1').effect('highlight', {mode: 'hide'});*/

	function toggle() {
		$('#img1').toggle('slide', 10000);
		$('#img2').toggle('slide', 10000);
	}

	$('#button1').click(toggle);
});