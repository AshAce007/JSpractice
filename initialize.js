var quote = "\"Only two things are infinite, the universe and human stupidity, and I'm not sure about the universe.\" - Einstein ................";
var text = "Disclaimer: Do NOT try to open this site on your phone.";
text = text.toUpperCase();
var FlowSpeed = function(speed, incremental) {
    return speed*incremental;
};
var printingText = function(text, incremental) {
    return text.charAt(incremental);
};


for(var i=text.length;i>0;i--) {
    setTimeout(function() {
		if(i>0 & (i%30)===0)
			document.getElementById("msg").innerHTML += printingText(text,i++)+"\n";
		else
			document.getElementById("msg").innerHTML += printingText(text,i++);    
		},FlowSpeed(200,i));
}

for(var j=quote.length;j>0;j--) {
    setTimeout(function() {
			document.getElementById("quote").innerHTML += printingText(quote,j++);    
		},FlowSpeed(70,j));
}

$("#quote").css("position","relative");
$("#quote").css("top",screen.height/3+"px");
$("#quote").css("left",screen.width/4.9+"px");
$("#quote").css("fontFamily","Arial");
$("#quote").css("font-size","90%");
$("#quote").css("opacity","0.5");
$("#quote").css("color","brown");

$("#msg").css("position","relative");
$("#msg").css("top",screen.height/3+"px");
$("#msg").css("left",screen.width/4.9+"px");
$("#msg").css("fontFamily","monospace");
$("#msg").css("font-size","200%");
$("#msg").css("opacity","0.5");

var color = ["green","yellow","red","green","orange","navy","violet","black","red"];
$("#time").css("position","fixed");
$("#time").css("top",screen.height/2.45+"px");
$("#time").css("left",screen.width/2+"px");
$("#time").css("fontFamily","monospace");
$("#time").css("font-size","500%");
$("#time").css("opacity",".8");
$("#time").css("border","3px");
var time=11;
setInterval(function() {
	time -= 1;
	if(time>=0) {
		$("#time").css("color",color[time]);
		document.getElementById("time").innerHTML = time;
	}
	
	if(time==0)
		window.location = "home.html";
},1500);

