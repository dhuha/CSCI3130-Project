/**
 * @module recommendaion controls recommendations in the user page
 * @requires jquery
 */

//run on document load
/**
 * @class ready populate reccomendations on page load
 */

$(document).ready( function() {
	//get the tags cookie
	var user = $.cookie('username');
	console.log("user: "  + user);

	/**
 * @method  get sends a get request to the server for the useres tags
 * @param {String} url server reqest URL
 * @param {function} callback once the tags have been fetched
 * @return {Strinf} the tags of the user
 */
	$.get(("http://centi.cs.dal.ca:60000/user/tags/"+ user ),function(tags,textStatus,jhxfq){
		console.log("server returned: " + tags);
		if(tags == null){
			tags ="";
		}
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

});
})
