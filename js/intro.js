$(document).ready(function(){

	var data = $(".user-name").html();

	$(".user-name").shuffleLetters({
		"text": data
	});

	data = $(".symbol").html();
	$(".symbol").shuffleLetters({
		"text": data
	});

	data = $("#activity").html();
	$("#activity").shuffleLetters({
		"text": data
	});

	data = $(".terminal-symbol").html();
	$(".terminal-symbol").shuffleLetters({
		"text": data
	});
	
	//hide the svg at the bottom
	$("#svg-blur").hide();
	
	$('.toggleModal').on('click', function (event) {
		event.preventDefault();
  
		$('.modal').toggleClass('is-active');
		$('body').toggleClass('is-blurred');
		$("#svg-blur").hide();
	});
	
	setTimeout(function(){
		if(($(".terminal-input").val() == "") && ($("#terminal-output").text() == "")){
			$("#svg-blur").show();
			$('.modal').toggleClass('is-active');
			$('body').toggleClass('is-blurred');
		}
	}, 3500);
});