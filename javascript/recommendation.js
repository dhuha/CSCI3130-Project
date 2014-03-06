//run on document load
$(document).ready( function() {
	//get the tags cookie
	var  tags = getTags();
	if(tags == null){
		tags ="";
	}

	console.log(tags);
	//hide reccomendations that havent been tagged

	if(tags.indexOf("lowCardio") == -1){
		console.log("removing ")
		$("#lowCardio").hide();
	}

	if(tags.indexOf("lowStrength") == -1){
		console.log("removing ")
		$("#lowStrength").hide();
	}

	if(tags.indexOf("highCardio") == -1){
		console.log("removing ")
		$("#highCardio").hide();
	}

	if(tags.indexOf("highStrength") == -1){
		console.log("removing ")
		$("#highStrength").hide();
	}

	if(tags.indexOf("lowIntensity") == -1){
		console.log("removing ")
		$("#lowIntensity").hide();
	}

	if(tags.indexOf("highIntensity") == -1){
		console.log("removing ")
		$("#highIntensity").hide();
	}
	function getTags() {
		 return $.cookie("tags");
	}

})