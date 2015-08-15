$(document).ready(function() {
	var items = ["a","s","h","i","q","u","e"];
    var direction = ["left","down"];
	var gravity = true;
	//drawing & positioning balls
	/*===========================*/
	var color = ["cyan","yellow","red","green","orange","navy","violet"];
	var LeftPos = 0;
	var TopPos = screen.height/2;
	for(var i=0;i<items.length;i++) {
		$("#"+items[i]).css("position","fixed");
		$("#"+items[i]).css("width",screen.width/19.51+"px");
		$("#"+items[i]).css("border-radius",(screen.width*20)/100+"px");
		$("#"+items[i]).css("color", "white");
		$("#"+items[i]).css("background","radial-gradient(circle at 100px 100px, "+color[i]+", #000)");
		$("#"+items[i]).css("box-shadow","15px 10px 5px black");
		$("#"+items[i]).css("text-align", "center");
		$("#"+items[i]).css("line-height", "70px");
		LeftPos += (screen.width/7)-30;
		$("#"+items[i]).css("left",(LeftPos)+"px");
		$("#"+items[i]).css("top",(TopPos)+"px");
	}
	
		
	//Ball Bouncing
	/*=============*/
	function ballBounce(gravity) {
		var bounce;
		if(gravity) {
			bounce = setInterval(function() {
				var dir = (Math.random()*2+0);
				for(var i=0;i<items.length;i++) {
					$("#"+items[i]).effect("bounce",{direction: direction[Math.floor(dir)], times: Math.floor(Math.random()*10+1)},Math.floor(Math.random()*4000+1));
				}
			},200);
		}else
			clearInterval(bounce);
	}	
	
	ballBounce(gravity); // by default gravity is true
	// Cloud movement
	/*================*/
	var posX = 0;
	document.getElementById("cloud").style.position = "fixed";
	var cloudGo = setInterval(function(){
		$("#cloud").css("top",(Math.random()*35)+30+"px");
		posX += Math.random()*5+3;
		//posX -= Math.random()*5+3;
		document.getElementById("cloud").style.left = posX+"px";	
		if(posX > screen.width) { 
			clearInterval(cloudGo);
			//
		}
	},Math.random()*200+90);
        
	// Pausing & Playing music
	/*=========================*/
		var music = document.getElementById("audio");
		$("#musicButtonOFF").css("position","relative");
		$("#musicButtonOFF").css("font-size","20px");
		$("#musicButtonOFF").css("left","5px");
		$("#musicButtonOFF").css("color","green");
		$("#musicButtonOFF").hide();
        $("#musicButtonOFF").click(function() {
            $("#musicButtonON").show();
			$(this).hide();
			music.pause();
        });
		
		$("#musicButtonON").css("position","relative");
		$("#musicButtonON").css("font-size","20px");
		$("#musicButtonON").css("left","5px");
		$("#musicButtonON").css("color","red");
        $("#musicButtonON").click(function() {
			$("#musicButtonOFF").show();
			$(this).hide();
            music.play();
        });
		
		// Positioning Buttons
		/*====================*/
		var actions = ["antiGravity","Gravity"];
		
		var left = 0;
		for(var i=0;i<actions.length;i++) {
			left += (screen.width/6)*2.5;
			$("#"+actions[i]).css("position","absolute");
			$("#"+actions[i]).css("width","200px");
			$("#"+actions[i]).css("height","150px");
			$("#"+actions[i]).css("left",left+"px");
			$("#"+actions[i]).css("top",(screen.height/2)+100+"px"); 
		}
		
		
		//antiGravity Effect
		/*==================*/
		
		
		//earthquake
		
		
});

