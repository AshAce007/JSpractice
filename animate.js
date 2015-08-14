$(document).ready(function() {
	var items = ["a","s","h","i","q","u","e"];
    var direction = ["left","down"];
	
	//drawing & positioning balls
	/*===========================*/
	var color = ["cyan","yellow","red","green","orange","navy","violet"];
	var LeftPos = 0;
	var TopPos = screen.height/2;
	for(var i=0;i<items.length;i++) {
		$("#"+items[i]).css("position","fixed");
		$("#"+items[i]).css("width","70px");
		$("#"+items[i]).css("border-radius","80px");
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
	setInterval(function() {
        var dir = (Math.random()*2+0);
		for(var i=0;i<items.length;i++) {
			$("#"+items[i]).effect("bounce",{direction: direction[Math.floor(dir)], times: Math.floor(Math.random()*10+1)},Math.floor(Math.random()*4000+1));
		}
	},200);
	
	/*var posX = 0;
	document.getElementById("cloud").style.position = "fixed";
	setInterval(function(){
		posX += 1;
		document.getElementById("cloud").style.left = posX+"px";
	},Math.random()*2000+25);*/
        
	// Pausing & Playing music
	/*=========================*/
		var music = document.getElementById("audio");
		$("#musicButtonOFF").css("position","relative");
		$("#musicButtonOFF").css("left","5px");
		$("#musicButtonOFF").css("color","green");
        $("#musicButtonOFF").click(function() {
			$(this).style.display = "none";
			$("#musicButtonON").style.display = "compact";
            music.pause();
        });
		
		$("#musicButtonON").css("position","relative");
		$("#musicButtonON").css("left","5px");
		$("#musicButtonON").css("color","red");
        $("#musicButtonON").click(function() {
			$(this).style.display = "none";
			$("#musicButtonOFF").style.display = "compact";
            music.play();
        });
		
	
});

