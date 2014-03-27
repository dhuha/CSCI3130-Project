
/**
 * controls the form in the login page
 * @module login 
 * @requires jquery
 */

$(document).ready( function() {

/**
 * called when submit button is clicked
 * @event click 
 */
	$(submit).click(function(){
		var username = $(user_name).val();
		var pass = $(password).val();
		
		console.log(username+", "+pass);
		console.log("Attempting to validate the user.");
		
		$.cookie("username",null,{path:"/", expires:7});
		/**
		 * call the validate end point to check if the username and password is correct
		 * @method post 
		 * @return {function} callback changes the page upon successfull validation
	 	*/
		$.ajax({
			url: "http://centi.cs.dal.ca:60000/login",
			data: {username: username , password: pass }, 
			success: function(data, textStatus,jqXHR){
				console.log('success');
				$.cookie("username",username,{path:"/", expires:7});
				var cont = false;
				cont = window.confirm("Continue?");
				if(cont == true){
					window.location = "survey.html";
					console.log("changing page");
				}
			},
			type: 'POST',
			error: function(jqXHR,textStatus,errorThrows){
				console.log('error');
				$.cookie("username",username,{path:"/", expires:7});
				var cont = false;
				cont = window.confirm("Continue?");
				if(cont == true){
					window.location = "survey.html";
					console.log("changing page");
				}
			}
		});
	})
}) 

