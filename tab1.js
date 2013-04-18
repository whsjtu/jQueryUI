$(document).ready(function(){
	$('#tabs').tabs({
		fx : { opacity: 'toggle'},
	}).tabs("add", "#tab4", "Tab 4");

	//$("#tab4").text("Content of the fourth tab");
	$("<i>Contents of the fourth tab</i>").appendTo('#tab4');
});