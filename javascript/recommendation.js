$(document).ready( function() {
var  tags = $.cookie("tags");

	if(tags.indexOf("lowCardio") == -1){
		$("menu").remove("lowCardio");
	}

})