//run on document load
$(document).ready( function() {
	//get the tags cookie
	var username = $.cookie('username');
	var  tags = getTags();
	if(tags == null){
		tags ="";
	}

	console.log(tags);
	//hide reccomendations that havent been tagged
	console.log(lowCardio());
	if(tags.indexOf("lowCardio") != -1){		
		var curr = $("#recBox").html();
		console.log("showing lowCardio: " + curr )
		$("#recBox").html( curr + (lowCardio() + "<br/><br/>"));
	}

	if(tags.indexOf("lowStrength") != -1){
		console.log("showing lowStrength")
		var curr = $("#recBox").html();
		$("#recBox").html( curr + (lowStrength() + "<br/><br/>"));
	}

	if(tags.indexOf("highCardio") != -1){
		console.log("showing highCardio");
		var curr = $("#recBox").html();
		$("#recBox").html( curr + (highCardio() + "<br/><br/>"));
	}

	if(tags.indexOf("highStrength") != -1){
		console.log("showing highStrength");
		var curr = $("#recBox").html();
		$("#recBox").html( curr + (highStrength() + "<br/><br/>"));
	}

	if(tags.indexOf("lowIntensity") != -1){
		console.log("showing lowIntensity")
		var curr = $("#recBox").html();
		$("#recBox").html( curr + (lowIntensity() + "<br/><br/>"));
	
	}

	if(tags.indexOf("highIntensity") != -1){
		console.log("showing highIntensity");
		var curr = $("#recBox").html();
		$("#recBox").html( curr + (highIntensity() + "<br/><br/>"));
	}
	function getTags() {
		 $.get("http://centi.cs.dal.ca:60000/user/tags/"+username,function(data,textStatus,jhxfq){
		 	return data;	
		 });
	}

})
