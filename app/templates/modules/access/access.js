$(document).ready(function() {
	$('.orderbutton').magnificPopup({
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll',
		callbacks: {
            ajaxContentAdded: function() {
								$(this.content).find(".access__link a").magnificPopup({
									type: 'ajax',
									alignTop: true,
									overflowY: 'scroll'
							});
            }
        }	
	});
	
  $('.registrationbutton__link a').magnificPopup({
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll' 
	});
	

	/*$('.access__back').click(function(){
		console.log("1")
		$.magnificPopup.close();
	})*/
});