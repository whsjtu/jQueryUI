$(document).ready(function(){
	$('#tabs').tabs();

	$('#accordion').accordion({icons: {'header': 'ui-icon-plus', 'activeHeader': 'ui-icon-minus'}});
	//$('#accordion').accordion("destroy");
    //alert($('#accordion').accordion('option'));

   /* $('#dialog').dialog({autoOpen: false});
   
    $('#open').click(function(event){
    	if($('#dialog').dialog('isOpen'))
    		alert('Already open !');
    	else $('#dialog').dialog('open');
    });
   
    $('#close').click(function(event){
    	if(!$('#dialog').dialog('isOpen'))
    		alert('Already closed !');
    	else $('#dialog').dialog('close');
    });
   */
    $('#dialog').dialog({
    	show: "bounce",
    	hide: "pulsate"
    }).dialog({
    	beforeClose: function(event){
    		if(!confirm('Close dialog?'))
    			return false;
    	}	
    }); 
});