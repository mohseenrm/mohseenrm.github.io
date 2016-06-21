$(document).ready(function(){
	$('body').addClass('is-blurred');

	$('.toggleModal').on('click', function (event) {
		event.preventDefault();
  
		$('.modal').toggleClass('is-active');
		$('body').toggleClass('is-blurred');
	});

// some improvements on the modal suggested by @iammarkoradak
});