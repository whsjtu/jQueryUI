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
     /*$('#dialog').dialog({
    	show: "bounce",
    	hide: "pulsate"
    }).dialog({
    	beforeClose: function(event){
    		if(!confirm('Close dialog?'))
    			return false;
    	}	
    });

    $('#dialog').dialog({
        buttons: {
            'YES': function() {
                $('#dialog').dialog('close');
            },
            'NO': function() {

            }
        }
    }).prev().find('.ui-dialog-titlebar-close').hide(); */

    $('#button1, #button2').button();
    $('input').button();
    $('.buttonset').buttonset();
    $('#checkbox input').button();

    $('#volume').button({
        icons: {
            secondary: 'ui-icon-volume-off'
        }, 
        label: 'volume off'
    }).click(function(event){
        var volume = $(this).button('option', 'icons').secondary == 'ui-icon-volume-off' ? false : true;
        if (volume) {
            $(this).button('option', 'label', 'volume off');
            $(this).button('option', 'icons', {secondary: 'ui-icon-volume-off'});
        } else {
            $(this).button('option', 'label', 'volume on');
            $(this).button('option', 'icons', {secondary: 'ui-icon-volume-on'});
        }
    });
    $('#progressbar').progressbar({
        value: false
    });
   /* $('#progressbar').progressbar({
        change: function(event){
        var value = $('#progressbar').progressbar('value');
        $('#percent').html(value + ' %');
        }
    });

    var value = 0;

    var timer = setInterval(function(){
        $('#progressbar').progressbar('value', value);
        value ++;
        if(value > 100) clearInterval(timer);
    }, 10);

*/
/*
    $('#slider').slider({
        animate: true,
        range: true,
        values: [0, 0],
        start: function(event){
            var values = $('#slider').slider('values');
            $('#valuestart').html(values[0] + ', ' + values[1]);
        },
        stop: function(event){
            var values = $('#slider').slider('values');
            $('#valuestop').html(values[0] + ', ' + values[1]);
        },
        change: function(event){
            var values = $('#slider').slider('values');
            $('#valuechange').html(values[0] + ', ' + values[1]);
        },
        slide: function(event){
            var values = $('#slider').slider('values');
            $('#valueslide').html(values[0] + ', ' + values[1]);
        }
    });
*/
    $('#slider').slider({
        animate: true,
        slide: function(){
            var value = $('#slider').slider('value');
            var opacity = value/100;
            $('img').css({opacity: opacity});          
        }
    }).slider('value', 100);


    $.datepicker.setDefaults({
        showOn: 'both',
        buttonImageOnly: true,
        buttonImage: 'images/icon-rel-tag.png',
        buttonText: 'calendar'
    });
    /*
    $('#date').datepicker({
        //showAnim: 'bounce',
        //showOtherMonths: true
        //minDate: -3,
        //maxDate: '1w',
        //showMonthAfterYear: true
        
        beforeShowDay: function(date){
            var dayOfWeek = date.getDay();
            if(dayOfWeek==0 || dayOfWeek==6) return [false];
            else return [true];
        }
        defaultDate: 2
    });*/
    $('#date').datepicker();
/*
    var books = ['Web development with J2EE', 'Practical css & javascript', 
    'Practical ruby on rails', 'Introduction to HTML & css', 'jQuery UI'];
    $('#book').autocomplete({
        source: books,
        open: function(event){
            var $ul = $(this).autocomplete('widget');
            $ul.hide().slideDown(600);
        },
        minLength:0
    }).focus(function(event){
        $(this).autocomplete('search','');
    });
    
*/
    $('#book').autocomplete({
        source: function(request, callback){
            var books = ['Web development with J2EE', 'Practical css & javascript', 
    'Practical ruby on rails', 'Introduction to HTML & css', 'jQuery UI'];
        callback(books);
        }
    });
    $('#book').removeClass('ui-button');
});