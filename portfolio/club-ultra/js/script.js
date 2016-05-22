// JavaScript Document


$(document).ready(nav)

function nav() {

$('#topnav li a').mouseover(function() {
  $(this).animate({
    color: '#4f4e4e'
  });
  $(this).clearQueue();
});

$('#topnav li a').mouseout(function(){
	$(this).animate({
		color: '#ffffff'
		});
	$(this).clearQueue();
	
	});


};