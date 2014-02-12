$(document).ready( function() {
var  tags = $.cookie("tags");
	if(tags == null){
		tags ="";
	}
	
	if(tags.indexOf("lowCardio") == -1){
		console.log("remiving ")
		$("menu").hide(".lowCardio");
	}
	if(tags.indexOf("lowStrength") == -1){
		console.log("remiving ")
		$("lowStrength").remove();
	}
	
	if(tags.indexOf("highCardio") == -1){
		console.log("remiving ")
		$("highCardio").remove();
	}
	if(tags.indexOf("highStrength") == -1){
		console.log("remiving ")
		$("highStrength").remove();
	}
	
	if(tags.indexOf("highIntensity") == -1){
		console.log("remiving ")
		$("highIntensity").remove();
	}
	
	
})