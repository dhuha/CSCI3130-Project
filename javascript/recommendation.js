$(document).ready( function() {
var  tags = $.cookie("tags");
	if(tags == null){
		tags ="";
	}
	
	if(tags.indexOf("lowCardio") == -1){
		console.log("remiving ")
		$("#lowCardio").hide();
	}
	if(tags.indexOf("lowStrength") == -1){
		console.log("remiving ")
		$("#lowStrength").hide();
	}
	
	if(tags.indexOf("highCardio") == -1){
		console.log("remiving ")
		$("#highCardio").hide();
	}
	if(tags.indexOf("highStrength") == -1){
		console.log("remiving ")
		$("#highStrength").hide();
	}
	if(tags.indexOf("lowIntensity") == -1){
		console.log("remiving ")
		$("#lowIntensity").hide();
	}
	
	if(tags.indexOf("highIntensity") == -1){
		console.log("remiving ")
		$("#highIntensity").hide();
	}
	
	
})