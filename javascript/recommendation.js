//run on document load
$(document).ready( function() {
	//get the tags cookie
	var  tags = getTags();
	if(tags == null){
		tags ="";
	}

	console.log(tags);
	//hide reccomendations that havent been tagged

	if(tags.indexOf("lowCardio") != -1){
		console.log("removing ")
		$("recBox").text($("recBox").text() + (low_Cardio() + "\n"));
	}

	if(tags.indexOf("lowStrength") != -1){
		console.log("removing ")
		$("recBox").text($("recBox").text() + (low_Strength() + "\n"));
	}

	if(tags.indexOf("highCardio") != -1){
		console.log("removing ")
		$("recBox").text($("recBox").text() + (high_Cardio() + "\n"));
	}

	if(tags.indexOf("highStrength") != -1){
		console.log("removing ")
		$("recBox").text($("recBox").text() + (high_Strength() + "\n"));
	}

	if(tags.indexOf("lowIntensity") != -1){
		console.log("removing ")
		$("recBox").text($("recBox").text() + (low_Intensity() + "\n"));
	
	}

	if(tags.indexOf("highIntensity") != -1){
		console.log("removing ")
		$("recBox").text($("recBox").text() + (high_Intensity() + "\n"));
	}
	function getTags() {
		 return $.cookie("tags");
	}

})
