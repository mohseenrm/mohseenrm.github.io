$(document).ready(function(){
	//#degree-time-2
	//edu-bar-3
	$("body").flowtype({
		minFont: 10,
		fontRatio: 100
	});
	
	var diff = getNiceTime(new Date("August 18, 2016"), new Date(), 5, false);;

	$(".timer").html(diff);

	setInterval(function(){
		diff = getNiceTime(new Date("August 18, 2016"), new Date(), 5, false);
		$(".timer").html(diff);
	}, 1000);

	barclaysTime = getNiceTime(new Date("August 3, 2015"), new Date("July 22, 2016"), 5, false);
	$(".barclays-time").html(barclaysTime);

	diff = getNiceTime(new Date("May 1, 2014"), new Date("July 14, 2014"), 2, false);
	$(".intern-time").html(diff);

	diff = getNiceTime(new Date("June 1, 2011"), new Date("July 1, 2015"), 2, false);
	$(".college-time").html(diff);

	$(".college-time").hide();

	$("#edu-bar-3").hide();
	$("#ref-bar-3").hide();
	
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
	//for mobile devices
	if($("#js-mobile").css("opacity") == "1"){
		$("#who-bar-1").delay(400).fadeIn(1000);
		$("#who-bar-2").delay(400).fadeIn(1000);

		$("#who").delay(400).fadeIn(1000);

		$("#description-para").delay(800).fadeIn(1000);

		$("#exp-bar-1").delay(1200).fadeIn(1000);
		$("#exp-bar-2").delay(1200).fadeIn(1000);
		$("#exp").delay(1200).fadeIn(1000);


		$("#btci").delay(1600).fadeIn(1000);
		$("#btci-time-1").delay(1600).fadeIn(1000);
		$("#btci-time-2").delay(1600).fadeIn(1000);

		$("#btci-para-1").delay(2000).fadeIn(1000);
		$("#btci-para-2").delay(2000).fadeIn(1000);

		$("#bar-1").delay(2200).fadeIn(1000);

		$("#intern-title").delay(2600).fadeIn(1000);
		$("#intern-time-1").delay(2600).fadeIn(1000);
		$("#intern-time-2").delay(2600).fadeIn(1000);

		$("#intern-para").delay(3000).fadeIn(1000);

		$("#edu-bar-1").delay(3400).fadeIn(1000);
		$("#edu-bar-2").delay(3400).fadeIn(1000);
		$("#edu").delay(3400).fadeIn(1000);

		$("#edu-bar-3").delay(3800).fadeIn(1000);
		$("#ms").delay(3800).fadeIn(1000);
		$("#asu").delay(3800).fadeIn(1000);
		$("#degree-time-2").delay(3800).fadeIn(1000);
		

		$("#degree").delay(4200).fadeIn(1000);
		$("#degree-name").delay(4200).fadeIn(1000);
		$("#degree-time").delay(4200).fadeIn(1000);

		$("#tech-bar-1").delay(4600).fadeIn(1000);
		$("#tech-bar-2").delay(4600).fadeIn(1000);

		$("#tech").delay(5000).fadeIn(1000);
		$("#tech-para-1").delay(5000).fadeIn(1000);
		$("#tech-para-2").delay(5000).fadeIn(1000);

		$("#ref-bar-1").delay(5400).fadeIn(1000);
		$("#ref-bar-2").delay(5400).fadeIn(1000);
		$("#ref").delay(5400).fadeIn(1000);
		$("#ref-bar-3").delay(5400).fadeIn(1000);
		

		$("#reference-1").delay(5800).fadeIn(1000);
		$("#reference-2").delay(5800).fadeIn(1000);
	}
	else{
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
		//updated for ASU
		setTimeout(function(){
			$("#edu-bar-3").fadeIn("slow");
		}, 920);
		//check the case for #ms and why this does not work
		setTimeout(function(){
			$("#ms").fadeIn("fast")
					.shuffleLetters({
						"text": $("#ms").html(),
						"fps": 30
					});

			$("#asu").fadeIn("fast")
					.shuffleLetters({
						"text": $(this).text(),
						"fps": 30
					});
		}, 970);

		setTimeout(function(){
			$("#degree-time-2").fadeIn("slow")
				.shuffleLetters({
					"text": $(this).text(),
					"fps": 30
				});
		}, 1000);
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
		}, 1100);

		setTimeout(function(){

			$("#tech-bar-1").fadeIn("slow");
			$("#tech-bar-2").fadeIn("slow");

		}, 1200);

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
		}, 1250);

		setTimeout(function(){
			$("#ref-bar-1").fadeIn("slow");
			$("#ref-bar-2").fadeIn("slow");
		}, 1350);

		setTimeout(function(){
			$("#ref").fadeIn("fast");
			$("#ref").shuffleLetters({
				"text": $("#ref").html(),
				"fps": 30
			});
		}, 1450);

		setTimeout(function(){
			$("#reference-1").fadeIn("fast");

			$("#reference-1").shuffleLetters({
				"text": $("#reference-1").html(),
				"fps": 45
			});
			$("#ref-bar-3").fadeIn("fast");
			$("#reference-2").fadeIn("fast");
			$("#reference-2").shuffleLetters({
				"text": $("#reference-2").html(),
				"fps": 45
			});
		}, 1500);
	}
	
});