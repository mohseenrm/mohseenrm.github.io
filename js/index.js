var help_home = "Glad you asked &#x263B;<br>" + "<br>" +
" &#x2756; Available commands: <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> home <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> design <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> resume <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> training <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> contact <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> blog <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> about";

var help_design = "Glad you asked &#x263B;<br>" + "<br>" +
" &#x2756; I have worked on a lot of <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> graphic design, which has involved <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> posters, <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> brochures, <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> web mockups, <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> animation sprites, <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> Vector Illustrations, <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> and web design <br>"  +
" <span style='color:#a8e6cf;'>&#x276F;</span> <a href='https://mohseenrm.github.io/'>Design Samples</a>";

var help_resume = "Glad you asked &#x263B;<br>" + "<br>" +
" &#x2756; Hold on for a moment <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> You are about to be... <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> Redirected";

var help_blog = "Glad you asked &#x263B;<br>" + "<br>" +
" &#x2756; Work <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> Under <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> Progress <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> Sorry :P <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> In the meantime check out <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> the other sections";

var help_contact = "Glad you asked &#x263B;<br>" + "<br>" +
" &#x2756; <a class='link-1' href='https://www.facebook.com/momo3300'>Facebook</a> <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> <a class='link-1' href='https://www.instagram.com/breaking_momo/'>Instagram</a> <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> <a class='link-1' href='https://plus.google.com/+mohseenmukaddam/posts'>Google+</a> <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> <a class='link-1' href='https://twitter.com/ManUBayern'>Twitter</a> <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> <a class='link-1' href='https://in.linkedin.com/in/mohseen-mukaddam-b608a26a'>LinkedIn</a> <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> <a class='link-1' href='https://github.com/mohseenrm'>Github</a> <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> <a class='link-1' href='mailto:mohseenrm@hotmail.com'>Plain old mail</a>";

var help_training = "Glad you asked &#x263B;<br>" + "<br>" +
" &#x2756; 1RM for lifts (RAW):            |         Stats: <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> Squat: 170 kg (375 lbs)           |         Bodyweight: 86 kg<br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> Bench: 125 kg (275 lbs)           |         Height : 6 ft (184 cm)<br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> Deadlift: 235 kg (518 lbs)        |         Powerlevel: 9000+ (DBZ Reference)<br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> Current Program: <a href='http://www.powerliftingtowin.com/the-juggernaut-method/'>Juggernaut method</a> (Effective: 3rd April 2016)<br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> I am far to lazy to update it on a regular basis<br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> You can very well assume I have gotten stronger and leaner since the last update";

var help_about = "Glad you asked &#x263B;<br>" + "<br>" +
" &#x2756; This website was created with some sort of rebellion in mind, <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> It however morphed into something I enjoyed creating, <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> Far off from a conventional website, but then again <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> Why should it be one? <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> I am far to lazy to update it on a regular basis (or automate it) <br>" +
" <span style='color:#a8e6cf;'>&#x276F;</span> but I hope this intrigued you a bit, if not, I am open to new ideas <span class='symbol'>;)</span>";

var help_error = "Invalid command type <i style='color:#b62020;'>help</i> or <i style='color:#b62020;'>home</i>";

var intervalFlag = 0;

function dirtyWork(help_text){
	//for some flexibility in screen size
	var slimOverride = $(".slim-override");
	var fps = 50;
	var ht = $(window).height();
	ht *= .70;
	ht += 'px';

	var width = slimOverride.width();
	//alter the speed of next line here

	ht = slimOverride.height();
	var intervalID = 0;
	if (intervalFlag == 0){
		intervalID = setInterval(function(){
			slimOverride.slimScroll({
				scrollBy: '50px',
				height: ht,
				width: width,
				touchScrollStep: 50
			});
		}, 150);
		intervalFlag += 1;
	}
				
	//tell the program when to give up
	var clearScroll = function(){
		clearInterval(intervalID);
		intervalFlag = 0;
	}
	//do the thing :)
	if($("#activity").text() == "contact"){
		fps = 65;
	}						
	slimOverride.shuffleLetters({
		"text": help_text,
		"fps": fps,
		"callback": clearScroll
	});
}
function commandLine(command){
	$(".slim-override").html("");
	var activity = $("#activity");
		if(command.search("cd") > -1){
			var place = command.split(" ")[1];
			switch(place){
				case "..":
					activity.html("home");
					break;
				case "/":
					activity.html("home");
					break;
				case ".":
					activity.html("home");
					break;
				case "home":
					activity.html("home");
					break;
				case "resume":
					activity.html("resume");
					break;
				case "design":
					activity.html("design");
					break;
				case "about":
					activity.html("about");
					break;
				case "training":
					activity.html("training");
					break;
				case "contact":
					activity.html("contact");
					break;
				case "blog":
					activity.html("blog");
					break;
				default:
					dirtyWork(help_error);
					break;
			}
		}
		else{
			var activityText = activity.text();
			switch(activityText){
				case "home":
					dirtyWork(help_home);
					break;
				case "design":
					dirtyWork(help_design);
					break;
				case "resume":
					var redirect = function(){
						window.location = "http://mohseenrm.github.io/resume.html"
					}
					$(".slim-override").shuffleLetters({
						"text": help_resume,
						"fps": 45,
						"callback": redirect
					});
					break;
				case "blog":
					var redirect = function(){
							window.location = "https://oddballpursuits.wordpress.com/"
						}
					$(".slim-override").shuffleLetters({
						"text": help_resume,
						"fps": 45,
						"callback": redirect
					});
					break;
				case "contact":
					dirtyWork(help_contact);
					break;
				case "training":
					dirtyWork(help_training);
					break;
				case "about":
					dirtyWork(help_about);
					break;
				default:
					dirtyWork(help_error);
					break;
			}
		}
}
$(document).ready(function () {
        
        var textbox = $(".terminal-input");
        textbox.hide();
        $(".footer").hide();
        setTimeout(function(){
        	textbox.show();
        	textbox.focus();
        	$(".footer").fadeIn().shuffleLetters({
				"text": $(".footer").text()
			});
        }, 850);
        
		textbox.focusout(function (){
			textbox.focus();
		});
		
		textbox.keypress(function(e){
			var key = e.which;
			if(key == 13){

				var command = textbox.val();
				textbox.val("");
				command = command.toLowerCase();
				
				if((command.search("cd") > -1) || (command.search("ls") > -1) || (command.search("dir") > -1)){
					commandLine(command);
				}
				else{
					var activity = $("#activity");
					var terminal = $(".slim-override");
					var currentActivity = activity.text();
					var i = 0;
					if (currentActivity == "home") {
						switch(command){
							case "help":
								dirtyWork(help_home);
								break;
							case "home":
								terminal.html("<span>Current view : home</span>");
								break;
							case "design":
								activity.text("design");
								terminal.text("");
								break;
							case "resume":
								activity.text("resume");
								terminal.text("");
								break;
							case "contact":
								activity.text("contact");
								terminal.text("");
								break;
							case "blog":
								activity.text("blog");
								terminal.text("");
								break;
							case "training":
								activity.text("training");
								terminal.text("");
								break;
							case "about":
								activity.text("about");
								terminal.text("");
								break;
							default:
								dirtyWork(help_error);
								break;
						}
					}
					else if (currentActivity == "resume") {
						switch(command){
							case "help":
								var redirect = function(){
									window.location = "http://www.mohseenrm.co.nf/resume.html"
								}
								$(".slim-override").shuffleLetters({
									"text": help_resume,
									"fps": 45,
									"callback": redirect
								});
								break;
							case "home":
								activity.text("home");
								terminal.text("");
								break;
							case "design":
								activity.text("design");
								terminal.text("");
								break;
							case "contact":
								activity.text("contact");
								terminal.text("");
								break;
							case "training":
								activity.text("training");
								terminal.text("");
								break;
							case "blog":
								activity.text("blog");
								terminal.text("");
								break;
							case "about":
								activity.text("about");
								terminal.text("");
								break;
							default:
								dirtyWork(help_error);
								break;
						}
					}
					else if (currentActivity == "design") {
						switch(command){
							case "help":
								dirtyWork(help_design);
								break;
							case "home":
								activity.text("home");
								terminal.text("");
								break;
							case "resume":
								activity.text("resume");
								terminal.text("");
								break;
							case "contact":
								activity.text("contact");
								terminal.text("");
								break;
							case "training":
								activity.text("training");
								terminal.text("");
								break;
							case "blog":
								activity.text("blog");
								terminal.text("");
								break;
							case "about":
								activity.text("about");
								terminal.text("");
								break;
							default:
								dirtyWork(help_error);
								break;
						}
					}
					else if (currentActivity == "contact") {
						switch(command){
							case "help":
								dirtyWork(help_contact);
								break;
							case "design":
								activity.text("design");
								terminal.text("");
								break;
							case "resume":
								activity.text("resume");
								terminal.text("");
								break;
							case "training":
								activity.text("training");
								terminal.text("");
								break;
							case "blog":
								activity.text("blog");
								terminal.text("");
								break;
							case "about":
								activity.text("about");
								terminal.text("");
								break;
							case "home":
								activity.text("home");
								terminal.text("");
								break;
							default:
								dirtyWork(help_error);
								break;
						}
					}
					else if (currentActivity == "blog") {
						switch(command){
							case "help":
								var redirect = function(){
									window.location = "https://oddballpursuits.wordpress.com/"
								}
								$(".slim-override").shuffleLetters({
									"text": help_resume,
									"fps": 45,
									"callback": redirect
								});
								break;
							case "design":
								activity.text("design");
								terminal.text("");
								break;
							case "resume":
								activity.text("resume");
								terminal.text("");
								break;
							case "training":
								activity.text("training");
								terminal.text("");
								break;
							case "contact":
								activity.text("contact");
								terminal.text("");
								break;
							case "about":
								activity.text("about");
								terminal.text("");
								break;
							case "home":
								activity.text("home");
								terminal.text("");
								break;
							default:
								dirtyWork(help_error);
								break;
						}
					}
					else if (currentActivity == "about") {
						switch(command){
							case "help":
								dirtyWork(help_about);
								break;
							case "design":
								activity.text("design");
								terminal.text("");
								break;
							case "resume":
								activity.text("resume");
								terminal.text("");
								break;
							case "training":
								activity.text("training");
								terminal.text("");
								break;
							case "contact":
								activity.text("contact");
								terminal.text("");
								break;
							case "blog":
								activity.text("blog");
								terminal.text("");
								break;
							case "home":
								activity.text("home");
								terminal.text("");
								break;
							default:
								dirtyWork(help_error);
								break;
						}
					}
					else if (currentActivity == "training") {
						switch(command){
							case "help":
								dirtyWork(help_training);
								break;
							case "home":
								activity.text("home");
								terminal.text("");
								break;
							case "design":
								activity.text("design");
								terminal.text("");
								break;
							case "resume":
								activity.text("resume");
								terminal.text("");
								break;
							case "contact":
								activity.text("contact");
								terminal.text("");
								break;
							case "blog":
								activity.text("blog");
								terminal.text("");
								break;
							case "about":
								activity.text("about");
								terminal.text("");
								break;
							default:
								dirtyWork(help_error);
								break;
						}
					}
					else{}
					textbox.focus();
				}
			}
		});
});
