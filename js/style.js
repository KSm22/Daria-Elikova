lazyload();

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
	});
});

$(function(){
	$('.load-more').on('click', function(){
		const btn = $(this);
		const loader = btn.find('span');
		$.ajax({
			url: '../data.html',
			type: 'GET',
			beforeSend: function(){
				btn.attr('disabled', true);
				loader.addClass('d-inline-block');
			},
			success: function(responce){
				setTimeout(function(){
					loader.removeClass('d-inline-block');
					$('.after-posts').before(responce);
				}, 1000);
			},
			error: function(){
				alert('Error!');
				loader.removeClass('d-inline-block');
				btn.attr('disabled', false);
			}
		});
	});
});

$(function() {
  $(".btn-submit").on("click", validate);
 
  // Validate email
  function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  }
   
  // send form
/*  function sendForm() {
    $(".error").text("Form sending").fadeIn();
  }*/
 
  // validate email and send form after success validation
  function validate() {
    var email = $(".email").val();
    var $error = $(".error");
    $error.text("");
 
    if (validateEmail(email)) {
      $error.fadeOut();
      sendForm();
    } else {
      $error.fadeIn();
      $error.text("Введите корректный E-mail");
    }
    return false;
  }
});



