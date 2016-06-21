	function hideEverybody(){
	$("#name").hide();
	$("#tagline-text").hide();
	$("#who-bar-1").hide();
	$("#who-bar-2").hide();
	$("#who").hide();
	$("#description-para").hide();
	$("#exp-bar-1").hide();
	$("#exp-bar-2").hide();
	$("#exp").hide();
	$("#btci").hide();
	$("#btci-time-1").hide();
	$("#btci-time-2").hide();
	$("#btci-para-1").hide();
	$("#btci-para-2").hide();
	$("#bar-1").hide();
	$("#intern-title").hide();
	$("#intern-time-1").hide();
	$("#intern-time-2").hide();
	$("#intern-para").hide();
	$("#edu-bar-1").hide();
	$("#edu-bar-2").hide();
	$("#edu").hide();
	$("#degree").hide();
	$("#degree-name").hide();
	$("#degree-time").hide();
	$("#tech").hide();
	$("#tech-bar-1").hide();
	$("#tech-bar-2").hide();
	$("#tech-para-1").hide();
	$("#tech-para-2").hide();
	$("#ref-bar-1").hide();
	$("#ref").hide();
	$("#ref-bar-2").hide();
	$("#reference-1").hide();
	$("#reference-2").hide();
}
$(document).ready(function(){
	
	$("body").flowtype({
		minFont: 10,
		fontRatio: 100
	});
	
	//hideEverybody();
	
	var diff = getNiceTime(new Date("August 3, 2015"), new Date(), 5, false);;

	$(".timer").html(diff);

	setInterval(function(){
		diff = getNiceTime(new Date("August 3, 2015"), new Date(), 5, false);
		$(".timer").html(diff);
	}, 1000);

	diff = getNiceTime(new Date("May 1, 2014"), new Date("July 14, 2014"), 2, false);
	$(".intern-time").html(diff);

	diff = getNiceTime(new Date("June 1, 2011"), new Date("July 1, 2015"), 2, false);
	$(".college-time").html(diff);
	
	$("#name").fadeIn("fast");
	$("#name").shuffleLetters({
		"text": $("#name").html(),
		"fps": 30
	});
	
	$("#tagline-text").fadeIn("fast");
	$("#tagline-text").shuffleLetters({
		"text": $("#tagline-text").html(),
		"fps": 30
	});
	
	//setTimeout(function(){},);
	//	for copy paste
	setTimeout(function(){
		$("#who-bar-1").fadeIn("slow");
		$("#who-bar-2").fadeIn("slow");
	}, 100);
	
	setTimeout(function(){
		$("#who").fadeIn("fast");
		$("#who").shuffleLetters({
		"text": $("#who").html(),
		"fps": 30
		});
	}, 170);
	
	setTimeout(function(){
		$("#1").shuffleLetters({
		"text": $("#1").html(),
		"fps": 30
		});
		$("#2").shuffleLetters({
		"text": $("#2").html(),
		"fps": 30
		});
		$("#3").shuffleLetters({
		"text": $("#3").html(),
		"fps": 30
		});
		$("#4").shuffleLetters({
		"text": $("#4").html(),
		"fps": 30
		});
		$("#5").shuffleLetters({
		"text": $("#5").html(),
		"fps": 30
		});
		$("#6").shuffleLetters({
		"text": $("#6").html(),
		"fps": 30
		});
		$("#description-para").fadeIn("slow");
		
	}, 200);
	
	setTimeout(function(){
		$("#exp-bar-1").fadeIn("slow");
		$("#exp-bar-2").fadeIn("slow");
		//$('html, body').animate({scrollTop: $("#exp-bar-2").offset().top}, 100);
	}, 300);
	
	setTimeout(function(){
		$("#exp").fadeIn("fast");
		$("#exp").shuffleLetters({
		"text": $("#exp").html(),
		"fps": 30
		});

	}, 370);
	
	setTimeout(function(){
		$("#btci").fadeIn("fast");
		$("#btci").shuffleLetters({
		"text": $("#btci").html(),
		"fps": 30
		});
		$("#btci-time-1").fadeIn("fast");
		$("#btci-time-1").shuffleLetters({
		"text": $("#btci-time-1").html(),
		"fps": 30
		});
		$("#btci-time-2").fadeIn("fast");
		$("#btci-time-2").shuffleLetters({
		"text": $("#btci-time-2").html(),
		"fps": 30
		});
		
	}, 400);
	
	setTimeout(function(){

		$("#btci-para-1").fadeIn("fast");
		
		$("#btci-para-1").shuffleLetters({
		"text": $("#btci-para-1").html(),
		"fps": 50
		});
		$("#btci-para-2").fadeIn("fast");
		$("#btci-para-2").shuffleLetters({
		"text": $("#btci-para-2").html(),
		"fps": 50
		});
	}, 500);
	
	setTimeout(function(){
		$("#bar-1").fadeIn("slow");
	}, 550);
	
	setTimeout(function(){
	
		$("#intern-title").fadeIn("fast");
		$("#intern-title").shuffleLetters({
			"text": $("#intern-title").html(),
			"fps": 30
		});
		$("#intern-time-1").fadeIn("fast");
		$("#intern-time-1").shuffleLetters({
		"text": $("#intern-time-1").html(),
		"fps": 30
		});
		$("#intern-time-2").fadeIn("fast");
		$("#intern-time-2").shuffleLetters({
		"text": $("#intern-time-2").html(),
		"fps": 30
		});
	}, 650);
	
	setTimeout(function(){
	
		$("#intern-para").fadeIn("fast");
		$("#intern-para").shuffleLetters({
			"text": $("#intern-para").html(),
			"fps": 40
		});
		
	}, 700);
	
	setTimeout(function(){
		
		$("#edu-bar-1").fadeIn("slow");
		$("#edu-bar-2").fadeIn("slow");
		
	}, 800);
	setTimeout(function(){
		
		$("#edu").fadeIn("fast");
		$("#edu").shuffleLetters({
			"text": $("#edu").html(),
			"fps": 30
		});
		
	}, 870);
	
	setTimeout(function(){
		
		$("#degree").fadeIn("fast");
		$("#degree").shuffleLetters({
			"text": $("#degree").html(),
			"fps": 30
		});
		
		$("#degree-name").fadeIn("fast");
		$("#degree-name").shuffleLetters({
			"text": $("#degree-name").html(),
			"fps": 30
		});
		
		$("#degree-time").fadeIn("slow");
		$("#degree-time").shuffleLetters({
			"text": $("#degree-time").html(),
			"fps": 30
		});
	}, 950);
	
	setTimeout(function(){
		
		$("#tech-bar-1").fadeIn("slow");
		$("#tech-bar-2").fadeIn("slow");
		
	}, 1000);
	
	setTimeout(function(){
		
		$("#tech").fadeIn("fast");
		$("#tech").shuffleLetters({
			"text": $("#tech").html(),
			"fps": 30
		});
		
		$("#tech-para-1").fadeIn("fast");
		
		$("#tech-para-1").shuffleLetters({
		"text": $("#tech-para-1").html(),
		"fps": 45
		});
		$("#tech-para-2").fadeIn("fast");
		$("#tech-para-2").shuffleLetters({
		"text": $("#tech-para-2").html(),
		"fps": 45
		});
	}, 1050);

	setTimeout(function(){
		$("#ref-bar-1").fadeIn("slow");
		$("#ref-bar-2").fadeIn("slow");
	}, 1100);
	
	setTimeout(function(){
		$("#ref").fadeIn("fast");
		$("#ref").shuffleLetters({
			"text": $("#ref").html(),
			"fps": 30
		});
	}, 1150);

	setTimeout(function(){
		$("#reference-1").fadeIn("fast");
		
		$("#reference-1").shuffleLetters({
			"text": $("#reference-1").html(),
			"fps": 45
		});

		$("#reference-2").fadeIn("fast");
		$("#reference-2").shuffleLetters({
			"text": $("#reference-2").html(),
			"fps": 45
		});
	}, 1200);
});