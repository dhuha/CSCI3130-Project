
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
 $(submit).click(function(event){
 	event.preventDefault();
 	var username = $("#user_name").val();
 	var pass = $("#password").val();

 	console.log(username+", "+pass);
 	console.log("Attempting to validate the user.");

		/**
		 * call the validate end point to check if the username and password is correct
		 * @method post 
		 * @return {function} callback changes the page upon successfull validation
		 */
		 $.post("http://centi.cs.dal.ca:60000/login",{username: username , password: pass },function(data, textStatus,jqXHR){
		 	if(data == "success"){
		 	console.log('success');
		 	window.location = "http://centi.cs.dal.ca/group16/userpage.html";
		 	console.log("changing page");
		 }else{
		 	console.log("unsuccessfull login attempt");
		 	alert("incorrect username or password");
		 	window.location = "user_login.html";
		 }
		 });
		})
}) 

