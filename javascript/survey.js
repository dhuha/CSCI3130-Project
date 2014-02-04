$(document).ready( function() {
	console.log("page ready");
	$.cookie("my_cookie",1,{ path : '/'},{ expires : 10 } );
	console.log($.cookie("my_cookie"));
	alert($.cookie("my_cookie"))
} )