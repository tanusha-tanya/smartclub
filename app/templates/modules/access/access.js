$(document).ready(function() {
	$('.orderbutton').magnificPopup({
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll',
		callbacks: {
			ajaxContentAdded: function() {
				$('.access__back').click(function(){
					$.magnificPopup.close();
				});
				$(this.content).find(".access__input-phone").mask("+7(999) 999-9999");
			}
		}	
	});
	
  $('.registrationbutton__link a').magnificPopup({
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
					$('.access__back').click(function(){
					$.magnificPopup.close();
				});
				$(this.content).find(".access__input-phone").mask("+7(999) 999-9999");
				}
        	}
	});
});
$(".access__input-phone").mask("+7(999) 999-9999");
$('body').on('change','input[type=checkbox].js-confirm',function(){
      changeButtonIfAgree($(this).parents('form').find('input[type=submit]'), $(this));
      changeButtonIfAgree($(this).parents('form').find('button[type=submit]'), $(this));
  });

  $('body').on('input','input[type=text].ask__input',function(){
    if (this.value.trim().length !== 0) {
      $(this).parent("label").removeClass("error-label");
      $(this).parent('.ask__label').addClass('notempty');
      $(this).parent("label").find(".error__text").remove();
    }
    else {
        $(this).parent('.ask__label').removeClass('notempty')
    }
  });

  $('body').on('submit','.ajaxform', function(event){
    event.preventDefault();
    let text = $(this).find('input[type=text]');
    text.parent("label").find(".error__text").remove();
    text.parent("label").removeClass("error-label");
    for(let i = 0; i < text.length; i++){
      if(text[i].value.trim().length === 0){
        $(text[i]).parent("label").addClass("error-label");
        $(text[i]).parent("label").append('<div class="error__text">Пожалуйста, заполните поле</div>');
      }
    };
  });