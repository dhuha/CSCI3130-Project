$(document).ready( function() {
var  tags = $.cookie("tags");
	if(tags == null){
		tags ="";
	}

	if(tags.indexOf("lowCardio") == -1){
		console.log("remiving ")
		$("lowCardio").remove();
	}

})